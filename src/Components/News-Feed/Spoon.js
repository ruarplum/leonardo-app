import { useState } from "react";

const SpoonCounter = (props) => {
  const [spoonCounter, setSpoonCount] = useState(props.spoon);

  return (
    <div>
      <button
        className="feed-spoon"
        onClick={() => setSpoonCount(spoonCounter + 1)}
      >
        🥄 {spoonCounter}
      </button>
    </div>
  );
};

export default SpoonCounter;
