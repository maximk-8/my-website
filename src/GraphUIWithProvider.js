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
    Controls
} from 'reactflow';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import 'reactflow/dist/style.css';
import Lottie from 'react-lottie';
import loadingData from './loadingAnimation.json';

const ButtonStateContext = React.createContext();

const CircleNode = ({ data }) => {
    return (
        <div style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)', border: '2px solid #ddd', borderRadius: '50%', width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Handle type="target" position="left" isConnectable={data.isConnectable} style={{ width: 20, height: 20, borderRadius: '50%', background: '#00BFFF', left: '-10px' }} />
            <Handle type="source" position="right" isConnectable={data.isConnectable} style={{ width: 20, height: 20, borderRadius: '50%', background: '#98FB98', right: '-10px' }} />
            {data.label}
        </div>
    );
};

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, label, style }) => {
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
            <BaseEdge id={id} path={edgePath} style={style}/>
            <EdgeLabelRenderer>
                <input
                    type="number"
                    min="1"
                    step="1"
                    value={label || ""}
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
    { id: '2', type: "circleNode", position: { x: 800, y: 300 }, data: { label: 'B', isConnectable: true } },
    { id: '3', type: "circleNode", position: { x: 400, y: 500 }, data: { label: 'C', isConnectable: true } },
    { id: '4', type: "circleNode", position: { x: 1100, y: 600 }, data: { label: 'D', isConnectable: true } },
];

const initialEdges = [
    { id: 'reactflow__edge-1-2', source: '1', target: '2', type: 'custom-edge', style: { stroke: 'white', strokeWidth: 2 }, label: 4 },
    { id: 'reactflow__edge-2-4', source: '2', target: '4', type: 'custom-edge', style: { stroke: 'white', strokeWidth: 2 }, label: 1 },
    { id: 'reactflow__edge-3-4', source: '3', target: '4', type: 'custom-edge', style: { stroke: 'white', strokeWidth: 2 }, label: 3 } 
];

const nodeTypes = {
    'circleNode': CircleNode,
};

const edgeTypes = {
    'custom-edge': CustomEdge,
};

const loadingAnimationOptions = {
    loop: true,
    autoplay: true, 
    animationData: loadingData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
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
    const [noPathAlert, setNoPathAlert] = useState(false);
    const graphCSV = useRef('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSelectNodesClick = () => {
        if (!isSelectNodesPressed) {
            edges.forEach((edge) => {
                edge.style = { stroke: 'white', strokeWidth: 2 };
                edge.animated = false;
            });
            nodes.forEach((node) => {
                node.selected = false;
            });
            if (checkEdgeLabels()) {
                setOpenAlert(true);
                return;
            }
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
        setNoPathAlert(false);
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
        (params) => setEdges((eds) => addEdge({ ...params, type: 'custom-edge', style: { stroke: 'white', strokeWidth: 2 } }, eds)),
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

    const selectedEdgesStyles = {
        stroke: 'red',
        strokeWidth: 5,
    };

    const colorEdges = (nodeIds) => {
        if (nodeIds[0] === "") {
            setNoPathAlert(true);
            return;
        }

        const selectedEdges = [];

        for (let i = 0; i < nodeIds.length - 1; i++) {
            const source = nodeIds[i];
            const target = nodeIds[i + 1];
    
            const edge = edges.find(edge => 
                (edge.source === source && edge.target === target) || 
                (edge.source === target && edge.target === source)
            );
    
            if (edge) {
                selectedEdges.push(edge);
            }
        }

        selectedEdges.forEach(edge => {
            edge.style = selectedEdgesStyles;
            edge.animated = true;
        });
    };

    const handleFindShortestUnweightedPath = async () => {
        const graph = graphCSV.current;
        const term = "unweighted";
        const nodes = selectedNodes;

        try {

            setIsLoading(true);
            const response = await fetch('http://backend-env-v2-env.eba-4p5bpwzm.us-east-1.elasticbeanstalk.com/api/findPath', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ graph, nodes, term }),
            });
            const data = await response.json();

            colorEdges(data.result.split(','));
            setIsLoading(false);

        } catch (error) {

            setIsLoading(false);
            throw new Error(error);

        }

        handleSelectNodesClick();
    }

    const handleFindShortestWeightedPath = async () => {
        const graph = graphCSV.current;
        const term = "weighted";
        const nodes = selectedNodes;
        
        try {

            setIsLoading(true);
            const response = await fetch('http://backend-env-v2-env.eba-4p5bpwzm.us-east-1.elasticbeanstalk.com/api/findPath', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ graph, nodes, term }),
            });
            const data = await response.json();

            colorEdges(data.result.split(','));
            setIsLoading(false);

        } catch (error) {

            setIsLoading(false);
            throw new Error(error);

        }
        
        handleSelectNodesClick();
    }

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
                <div className='relative h-[800px]' style={{ border: '8px solid', borderImageSlice: 1, borderImageSource: 'conic-gradient(#f99, #9f9, #99f, #f99)' }}>
                    {isLoading &&
                        <div className='flex items-center justify-center absolute w-full h-[784px] z-10 bg-white bg-opacity-80'>
                            <Lottie options={loadingAnimationOptions} height={500} width={500} />
                        </div>
                    }
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
                        <Controls />
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
                                    onClick={handleFindShortestUnweightedPath}
                                    className='mr-2 bg-transparent hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 border-4 hover:border-transparent rounded'
                                >
                                    Find Shortest Unweighted Path 
                                </button>
                                <button 
                                    onClick={handleFindShortestWeightedPath}
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
            <Snackbar open={noPathAlert} autoHideDuration={5000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleCloseAlert} severity="info" variant="filled">
                    <AlertTitle>Info</AlertTitle>
                    No path found between selected nodes
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