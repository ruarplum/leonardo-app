import { useState } from "react";

const HelpCounter = (props) => {
  const [helpCounter, sethelpCount] = useState(props.help);

  return (
    <div>
      <button
        className="feed-help"
        onClick={() => sethelpCount(helpCounter + 1)}
      >
        🤝🏼 {helpCounter}
      </button>
    </div>
  );
};

export default HelpCounter;