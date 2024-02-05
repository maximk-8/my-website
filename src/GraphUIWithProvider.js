import React, { useRef, useCallback, useState, useEffect } from 'react';
import ReactFlow, {
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Handle,
    BaseEdge,
    EdgeLabelRenderer,
    getStraightPath,
    useReactFlow,
    ReactFlowProvider,
    useOnSelectionChange,
} from 'reactflow';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import 'reactflow/dist/style.css';

const ButtonStateContext = React.createContext();

const CircleNode = ({ data }) => {
    return (
        <div style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)', border: '2px solid #ddd', borderRadius: '50%', width: 75, height: 75, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Handle type="target" position="left" isConnectable={data.isConnectable} style={{ width: 10, height: 10, borderRadius: '50%', background: 'white' }} />
            <Handle type="source" position="right" isConnectable={data.isConnectable} style={{ width: 10, height: 10, borderRadius: '50%', background: 'white' }} />
            {data.label}
        </div>
    );
};

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, label }) => {
    const isSelectNodesPressed = React.useContext(ButtonStateContext);

    const {setEdges} = useReactFlow();

    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });
  
    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            <EdgeLabelRenderer>
                <input
                    type="number"
                    min="1"
                    step="1"
                    value={label || ""}
                    placeholder={1}
                    disabled={isSelectNodesPressed}
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: 'all',
                        color: 'black',
                        width: '30px',
                        height: '30px',
                        textAlign: 'center',
                    }}
                    className="nodrag nopan"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    onChange={(event) => {
                        const newLabel = event.target.value;
                        setEdges((edges) => 
                            edges.map((edge) => (edge.id === id ? { ...edge, label: newLabel } : edge))
                        );
                    }}
                />
            </EdgeLabelRenderer>
        </>
    );
}

const initialNodes = [
    { id: '1', type: "circleNode", position: { x: 300, y: 200 }, data: { label: 'A', isConnectable: true } },
    { id: '2', type: "circleNode", position: { x: 400, y: 500 }, data: { label: 'B', isConnectable: true } },
    { id: '3', type: "circleNode", position: { x: 800, y: 300 }, data: { label: 'C', isConnectable: true } },
    { id: '4', type: "circleNode", position: { x: 1100, y: 600 }, data: { label: 'D', isConnectable: true } },
];

const initialEdges = [{ id: 'reactflow__edge-1-3', source: '1', target: '3', type: 'custom-edge' }];

const nodeTypes = {
    'circleNode': CircleNode,
};

const edgeTypes = {
    'custom-edge': CustomEdge,
};

const GraphUI = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const reactFlowInstance = useReactFlow();
    const isDragging = useRef(false);
    const [isSelectNodesPressed, setIsSelectNodesPressed] = useState(false);
    const [selectedNodes, setSelectedNodes] = useState([]);
    const nodeIdCounter = useRef(4);
    const [openAlert, setOpenAlert] = useState(false);
    const graphCSV = useRef('');

    const handleSelectNodesClick = () => {
        if (!isSelectNodesPressed && checkEdgeLabels()) {
            setOpenAlert(true);
            return;
        }
        setIsSelectNodesPressed(!isSelectNodesPressed);
        if (isSelectNodesPressed) {
            selectedNodes.forEach((nodeId) => {
                const itemNode = nodes.find(node => node.id === nodeId);
                itemNode.style = {};
            });
            setSelectedNodes([]);
        } 
        buildGraphCSV();
    };

    const handleCloseAlert = (event, reason) => {
        setOpenAlert(false);
    };

    const checkEdgeLabels = () => {
        return edges.some((edge) => edge.label === undefined);
    };

    const buildGraphCSV = () => {
        const csvRows = [];

        edges.forEach(edge => {
            const source = edge.source;
            const target = edge.target;
            const label = edge.label;
            const sortedNodes = [source, target].sort();
            csvRows.push(`${sortedNodes[0]},${sortedNodes[1]},${label}`);
        });

        nodes.forEach(node => {
            const nodeId = node.id;
            const nodeHasEdges = edges.some(edge => edge.source === nodeId || edge.target === nodeId);
            if (!nodeHasEdges) {
                csvRows.push(`${nodeId},X,1`);
            }
        });

        const csvString = csvRows.join('\n');
        graphCSV.current = csvString;
    };
    
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, type: 'custom-edge' }, eds)),
        [setEdges],
    );

    const onDragStart = useCallback(
        () => {
            isDragging.current = true;
        },
        [],
    );

    const onDragEnd = useCallback(
        () => {
            setTimeout(() => {
                isDragging.current = false;
            }, 0);
        },
        [],
    );

    const lastLabel = useRef('D');

    const getNextLabel = () => {
        const nextCharCode = lastLabel.current.charCodeAt(0) + 1;
        if (nextCharCode > 'Z'.charCodeAt(0)) {
            return (nextCharCode - 'Z'.charCodeAt(0)).toString();
        } else {
            return String.fromCharCode(nextCharCode);
        }
    };

    const onPaneDoubleClick = useCallback(
        (event) => {
            if (isDragging.current) {
                return;
            }
            if (isSelectNodesPressed) {
                return;
            }
            const position = reactFlowInstance.screenToFlowPosition({ x: event.clientX - 40, y: event.clientY - 40 });
            const newNode = {
                id: (++nodeIdCounter.current).toString(),
                type: 'circleNode',
                position,
                data: { label: getNextLabel() },
            };
            lastLabel.current = newNode.data.label;
            setNodes((ns) => ns.concat(newNode));
        },
        [reactFlowInstance, isSelectNodesPressed],
    );

    const selectedNodeStyles = {
        border: 'red 5px solid',
        borderRadius: '50%',
    };

    useOnSelectionChange({
        onChange: ({ nodes: items }) => {
            if (isSelectNodesPressed && items.length !== 0) {
                const itemNode = nodes.find(node => node.id === items[0].id);
                itemNode.style = selectedNodeStyles;
                setSelectedNodes((prevSelectedNodes) => {
                    const newSelectedNodes = [...prevSelectedNodes, ...items.map((node) => node.id)];
                    while (newSelectedNodes.length > 2) {
                        const itemNode = nodes.find(node => node.id === newSelectedNodes[0]);
                        itemNode.style = {};
                        newSelectedNodes.shift();
                    }
                    return newSelectedNodes;
                });
            }
        },
    });

    useEffect(() => {
        const updatedNodes = nodes.map((node) => ({
            ...node,
            deletable: !isSelectNodesPressed,
            data: {
                ...node.data,
                isConnectable: !isSelectNodesPressed,
            },
        }));

        const updatedEdges = edges.map((edge) => ({
            ...edge,
            deletable: !isSelectNodesPressed,
        }));
    
        setNodes(updatedNodes);
        setEdges(updatedEdges);
    }, [isSelectNodesPressed]);
    
    return (
        <ButtonStateContext.Provider value={ isSelectNodesPressed }>
            <div>
                <div style={{ 
                    border: '8px solid', 
                    borderImageSlice: 1, 
                    borderImageSource: 'conic-gradient(#f99, #9f9, #99f, #f99)',
                    height: 800
                }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onPaneClick={onPaneDoubleClick}
                        onConnectStart={onDragStart}
                        onConnectEnd={onDragEnd}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                    >
                        <Background variant="dots" gap={12} size={1} />
                    </ReactFlow>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <div>
                        <button 
                            onClick={handleSelectNodesClick}
                            className={`mt-8 text-white font-semibold py-2 px-4 border border-blue-500 border-4 rounded ${isSelectNodesPressed ? 'bg-blue-500' : 'bg-transparent hover:bg-blue-400 hover:border-transparent'}`}
                        > 
                            Select Nodes 
                        </button>
                    </div>
                    <div className='pt-4 min-h-20'>
                        {isSelectNodesPressed && selectedNodes.length === 2 &&
                            <>
                                <button 
                                    onClick={() => alert('Find Shortest Unweighted Path')}
                                    className='mr-2 bg-transparent hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 border-4 hover:border-transparent rounded'
                                >
                                    Find Shortest Unweighted Path 
                                </button>
                                <button 
                                    onClick={() => alert('Find Shortest Weighted Path')}
                                    className='ml-2 bg-transparent hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 border-4 hover:border-transparent rounded'
                                >
                                    Find Shortest Weighted Path 
                                </button>
                            </>
                        }
                    </div>
                </div>
            </div>
            <Snackbar open={openAlert} autoHideDuration={5000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleCloseAlert} severity="error" variant="filled">
                    <AlertTitle>Error</AlertTitle>
                    Please give all edges a weight before selecting nodes
                </Alert>
            </Snackbar>
        </ButtonStateContext.Provider>
    );
}

const GraphUIWithProvider = () => {
    return (
        <ReactFlowProvider>
            <GraphUI />
        </ReactFlowProvider>
    );
}
 
export default GraphUIWithProvider;