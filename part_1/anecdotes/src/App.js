import { useState, useEffect } from "react";
import anecdotes from "./anecdotes";

function App() {
    const pointsArray = new Uint8Array(anecdotes.length);
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(pointsArray);
    const [mostVoted, setMostVoted] = useState({ text: "", points: 0 });

    const getRandomIndex = (max) => Math.floor(Math.random() * max);
    const findBiggestNumberIndex = (arr) => {
        let max = arr[0];
        let maxIndex = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        console.log("maxindex", maxIndex);
        return maxIndex;
    };

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

    useEffect(() => {
        let maxVoteIndex = findBiggestNumberIndex(points);
        setMostVoted({
            text: anecdotes[maxVoteIndex],
            points: points[maxVoteIndex],
        });
        console.log(mostVoted);
    }, [points]);

    return (
        <div className="App">
            <div className="content">
                <h1>Anecdote of the day</h1>
                <p>{anecdotes[selected]}</p>
                <p>This anecdote has {points[selected]} votes</p>
                <button onClick={handleChangeAnecdote}>Next anecdote</button>
                <button onClick={handleVote}>Vote</button>
            </div>
            {mostVoted && (
                <div className="results">
                    <h1>Anecdote with most votes</h1>
                    <p>{mostVoted.text}</p>
                    <p>This anecdote has {mostVoted.points} votes</p>
                </div>
            )}
        </div>
    );
}

export default App;
