import React, { useState } from "react";

const initialColors = ["red", "yellow", "green"];

const Home = () => {
    const [colors, setColors] = useState(initialColors);
    const [color, setColor] = useState("red");

    const cycleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    const addPurple = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    };

    return (
        <div className="container">
            <div className="pole"></div>
            <div className="traffic-light">
                <div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow-red" : "")}></div>
                <div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow-yellow" : "")}></div>
                <div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow-green" : "")}></div>
                {colors.includes("purple") && (
                    <div onClick={() => setColor("purple")} className={"light purple" + (color === "purple" ? " glow-purple" : "")}></div>
                )}
            </div>
            <div>
                <button className="btn btn-success mt-3" onClick={cycleColor}>Change Color</button>
                <button className="btn btn-secondary mt-3 ms-2" onClick={addPurple}>Add Purple</button>
            </div>
        </div>
    );
};

export default Home;