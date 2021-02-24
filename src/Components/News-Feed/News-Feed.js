import "./News-Feed.css";
import Icon from "../sidebar/logo.png";
import Who from "./Who";
import Counter from "./sideBarCounter";

const Feed = () => {
  return (
    /* This will create main box for content to sit within*/
    <div className="feed-box">
      <div className="feed-sidebar">
        <Counter />
        {/* <button className="upArrow">⬆</button>
        <p className="arrowNumber">number</p>
        <button className="downArrow">⬇</button> */}
      </div>

      <div className="feed-right-wrapper">
        <div className="feed-right-top">
          <div className="feed-com-post">
            <Who
              text="r/AskReddit"
              textWho="Posted by u/Nick 12 hours ago"
              img={Icon}
            />
          </div>

          <div className="feed-award">
            <p>⭐ </p>
            <p>🤝🏼 </p>
            <p>🦭 </p>
            <p>🥄 </p>
            <p>🧸 </p>
          </div>

          <div className="feed-join">
            <button className="join">➕ Join</button>
          </div>
        </div>
        <div className="feed-main">
          <p>This is test text</p>
        </div>

        <div className="feed-bottom-bar">
          <button className="botButton">💬 .. Comments</button>
          <button className="botButton">↪ Share</button>
          <button className="botButton">💾 Save</button>
          <button className="botButton">...</button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
