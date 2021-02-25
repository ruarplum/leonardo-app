import { useState } from "react";

const HugzCounter = (props) => {
  const [hugzCounter, setHugzCount] = useState(props.hugz);

  return (
    <div>
      <button
        className="feed-award-button"
        onClick={() => setHugzCount(hugzCounter + 1)}
      >
        🧸 {hugzCounter}
      </button>
    </div>
  );
};

export default HugzCounter;
