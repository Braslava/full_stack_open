import { useState } from "react";
import anecdotes from "./anecdotes";

function App() {
    const pointsArray = new Uint8Array(anecdotes.length);
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(pointsArray);
    const getRandomIndex = (max) => Math.floor(Math.random() * max);

    const handleChangeAnecdote = () => {
        let index = getRandomIndex(anecdotes.length);
        if (index === selected) {
            index = getRandomIndex(anecdotes.length);
        }
        setSelected(index);
    };

    const handleVote = () => {
        setPoints((prevPoints) => [
            ...prevPoints.slice(0, selected),
            prevPoints[selected]++,
            ...prevPoints.slice(selected + 1),
        ]);
        console.log(points);
    };

    return (
        <div className="App">
            <div className="content">
                <p>{anecdotes[selected]}</p>
                <p>This anecdote has {points[selected]} votes</p>
            </div>
            <button onClick={handleChangeAnecdote}>Next anecdote</button>
            <button onClick={handleVote}>Vote</button>
        </div>
    );
}

export default App;
