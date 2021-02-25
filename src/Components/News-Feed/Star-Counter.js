import { useState } from "react";

const StarCounter = (props) => {
  const [starCounter, setStarCount] = useState(props.star);

  return (
    <div>
      <button
        className="feed-award-button"
        onClick={() => setStarCount(starCounter + 1)}
      >
        ⭐ {starCounter}
      </button>
    </div>
  );
};

export default StarCounter;
