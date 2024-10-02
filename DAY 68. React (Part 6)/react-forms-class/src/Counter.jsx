import React, { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  let handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count={count}</h1>
      <button onClick={handleCount}>+1</button>
    </div>
  );
}
