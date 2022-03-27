import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = async () => {
        try {
            const res = await axios.get("https://api.adviceslip.com/advice");
            const { id, advice } = res.data.slip;

            setAdvice(advice);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
            <span style={{ color: "white", marginTop: "25px" }}>
                Thank JavaScript Mastery
            </span>
        </div>
    );
};

export default App;
