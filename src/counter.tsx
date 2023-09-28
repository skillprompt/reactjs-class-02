import { useState } from "react";

export function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);

  const name = "Time line counter";

  const game = {
    name: "cricket",
  };

  function onCountPlus() {
    setCount(count + 1);
    console.log("plus one", count);
  }

  // javascript extension - jsx
  // looks like html
  // jsx is converted to html
  return (
    <div className="test">
      <h2>My Counter - {count}</h2>
      <h3>{name}</h3>
      <button onClick={onCountPlus}>+1</button>

      <div className="gameContainer">
        <p>{game.name}</p>
      </div>
    </div>
  );
}
