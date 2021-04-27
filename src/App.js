import React, { useState } from "react";

export default function App() {
  const [count, Inc] = useState(10);

  const IncNum = () => {
    Inc(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncNum}>click</button>
    </div>
  );
}
