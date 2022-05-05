import { useState } from "react";
import "./index.css";

function App() {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClick = () => {
        setGood((prevGood) => prevGood + 1);
    };

    const handleNeutralClick = () => {
        setNeutral((prevNeutral) => prevNeutral + 1);
    };

    const handleBadClick = () => {
        setBad((prevBad) => prevBad + 1);
    };

    return (
        <div className="App">
            <div className="feedback">
                <h1>Give Feedback</h1>
                <div className="button-container">
                    <button onClick={handleGoodClick}>good</button>
                    <button onClick={handleNeutralClick}>neutral</button>
                    <button onClick={handleBadClick}>bad</button>
                </div>
            </div>
            <div className="statistics">
                <h2>Statistics</h2>
                <p>Good {good}</p>
                <p>Neutral {neutral}</p>
                <p>Bad {bad}</p>
            </div>
        </div>
    );
}

export default App;
