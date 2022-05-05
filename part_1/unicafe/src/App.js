import { useEffect, useState } from "react";
import Statistics from "./components/Statistics.js";

function App() {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [score, setScore] = useState(0);
    const [average, setAverage] = useState(0);
    const [positiveProportion, setPositiveProportion] = useState(0);

    useEffect(() => {
        setAverage(score / reviewCount);
        setPositiveProportion((good / reviewCount) * 100);
    }, [good, bad, neutral, score, reviewCount]);

    const handleGoodClick = () => {
        setReviewCount((reviewCount) => reviewCount + 1);
        setGood((good) => good + 1);
        setScore(score + 1);
    };

    const handleNeutralClick = () => {
        setReviewCount((reviewCount) => reviewCount + 1);
        setNeutral((neutral) => neutral + 1);
    };

    const handleBadClick = () => {
        setReviewCount((reviewCount) => reviewCount + 1);
        setBad((bad) => bad + 1);
        setScore(score - 1);
    };

    return (
        <div className="App">
            <div className="feedback">
                <h1>Give Feedback</h1>
                <div className="button-container">
                    <button onClick={handleGoodClick}>good</button>
                    <button onClick={handleNeutralClick}>neutral</button>
                    <button onClick={handleBadClick}>bad</button>
                    <p>{score}</p>
                </div>
            </div>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                reviewCount={reviewCount}
                average={average}
                positiveProportion={positiveProportion}
            />
        </div>
    );
}

export default App;
