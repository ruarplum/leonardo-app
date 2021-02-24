import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.votes);

  return (
    <div>
      <button className="upArrow" onClick={() => setCount(count + 1)}>
        ⬆
      </button>

      <p className="arrowNumber">{count}</p>

      <button className="downArrow" onClick={() => setCount(count - 1)}>
        ⬇
      </button>
    </div>
  );
};

export default Counter;
