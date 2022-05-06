import { useState } from "react";
import anecdotes from "./anecdotes";

function App() {
    const [selected, setSelected] = useState(0);
    const getRandomIndex = (max) => Math.floor(Math.random() * max);
    const handleClick = () => {
      let index = getRandomIndex(anecdotes.length); 
      if(index === selected) {
        index = getRandomIndex(anecdotes.length);
      }
        setSelected(index);
    };

    return (
        <div className="App">
            <div className="content">{anecdotes[selected]}</div>
            <button onClick={handleClick}>Next anecdote</button>
        </div>
    );
}

export default App;
