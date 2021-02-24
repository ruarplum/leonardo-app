import Awards from "./Awards";
import "./News-Feed.css";
import Icon from "../Community-sidebar/assets/logo.png";
import Who from "./Who";
import Post from "./Post";
import StarCounter from "./Star-Counter";


const Feed = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <>
      <Post
        author={post.author}
        catagory={post.catagory}
        upVote={post.upVote}
        downVote={post.downVote}
        star={post.star}
      />
      </>
    );
  });

  return (
    /* This will create main box for content to sit within*/
    <div className="feed-box-wrapper">{posts}</div>
  );
};

export default Feed;
