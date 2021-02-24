import Counter from "./sideBarCounter";
import Icon from "./Reddit-logo.png";
import Who from "./Who";

const Post = (props) => {
  return (
    <div className="feed-box">
      <div className="feed-sidebar">
        <Counter 
        votes={props.upVote - props.downVote}/>
      </div>

      <div className="feed-right-wrapper">
        <div className="feed-right-top">
          <div className="feed-com-post">
            <Who
              text={props.catagory}
              textWho={`Posted by ${props.author} 12 hours ago`}
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

export default Post;
