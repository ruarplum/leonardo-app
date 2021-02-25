import { useState } from "react";

const SealCounter = (props) => {
  const [sealCounter, setSealCount] = useState(props.seal);

  return (
    <div>
      <button
        className="feed-seal"
        onClick={() => setSealCount(sealCounter + 1)}
      >
        🐕‍🦺 {sealCounter}
      </button>
    </div>
  );
};

export default SealCounter;