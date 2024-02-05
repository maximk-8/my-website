import useTextAnimation from "./useTextAnimation";
import { useRef } from "react";
import useTypewriterEffect from "./useTypewriterEffect";
import GraphUIWithProvider from "./GraphUIWithProvider";

const GraphAPI = ({typewriterStorage}) => {
    const textRef = useRef(null);
    const textRef2 = useRef(null);

    useTextAnimation([textRef, textRef2]);
    useTypewriterEffect([textRef, textRef2], [100, 10], "graphAPI", typewriterStorage);

    return (
        <div className="text-white font-mono text-2xl/9 min-h-screen" style={{backgroundImage: "linear-gradient(to bottom, black, #3E75B6, #584993, #9F3578)"}}>
            <div className="text-justify py-1-12 mx-1/7 space-y-16">
                <div ref={textRef}>
                    <h1 className="text-center font-bold typewriter">
                        {`Graph API`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </h1>
                </div>
                <div ref={textRef2} className="space-y-8 pb-12">
                    <p className="typewriter">
                        {`Welcome to the GraphAPI! This application is designed to help you visualize and understand complex graphs and networks. It works by displaying nodes and edges in an interactive interface, allowing you to explore the connections and relationships in your data.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter font-bold">
                        {`How to Use the Graph API`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`1. Explore the Graph: You can drag around and zoom to explore the graph.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`2. Create Nodes: To create a new node, click anywhere in the box.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`3. Connect Nodes: Connect the nodes with edges by dragging the edges from one node to the other. Don't forget to give the edges a weight!`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`4. Delete Nodes and Edges: You can delete edges and nodes by selecting them and pressing backspace.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter pl-16">
                        {`5. Find Shortest Path: Click 'Select Nodes' to select two nodes and find the shortest path between them.`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter font-bold">
                        {`Enjoy exploring your data!`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                    <p className="typewriter text-sm">
                        {`PS: The 'shortest path' feature is just playing a bit of hide and seek at the moment. It's almost ready to come out and play, just a bit more work to do. Stay tuned!`.split(" ").map((word, i) => <span key={i} className="animated">{word} </span>)}
                    </p>
                </div>
                <div>
                    <GraphUIWithProvider />
                </div>
            </div>
        </div>
    );
}

export default GraphAPI;