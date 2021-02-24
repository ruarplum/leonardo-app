import Awards from "./Awards";
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
        awards={post.awards}
      />
    );
  });

  return (
    /* This will create main box for content to sit within*/
    <div className="feed-box-wrapper">{posts}</div>
  );
};

export default Feed;
