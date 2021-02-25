import "./News-Feed.css";
import Post from "./Post";

const Feed = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <Post
        author={post.author}
        catagory={post.catagory}
        upVote={post.upVote}
        downVote={post.downVote}
        star={post.star}
        help={post.help}
        seal={post.seal}
        spoon={post.spoon}
        hugz={post.hugz}
        time={post.time}
        text={post.text}
      />
    );
  });

  return (
    /* This will create main box for content to sit within*/
    <div className="feed-box-wrapper">{posts}</div>
  );
};

export default Feed;
