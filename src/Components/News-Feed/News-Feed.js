import "./News-Feed.css";


const Feed = (props) => {
    return (
        <div className = "feed-box">
            <div className = "feed-sidebar">
                <h2>test texts</h2>
            </div>
            <div className = "feed-com-post">
                <h3>r/AskReddit <span className = "feed-span">Posted by u/nick 12 hours ago</span></h3>
            </div>
            <div className = "feed-award">
                <p>test text</p>
            </div>
            <div className = "feed-join">
                <button>test</button>
            </div>
            <div className = "feed-main">
                <p>This is test text</p>
            </div>
            <div className = "feed-bottom-bar">
                <button>bottom test</button>
            </div>
        </div>
    );
}

export default Feed;