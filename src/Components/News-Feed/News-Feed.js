import "./News-Feed.css";


const Feed = (props) => {
    return ( 
        /* This will create main box for content to sit within*/
        <div className = "feed-box">

            <div className = "feed-sidebar">
                <button className = "upArrow">⬆</button>
                <p className ="arrowNumber">number</p>
                <button className = "downArrow">⬇</button>
            </div>

            
            <div className = "feed-com-post">
                <h3>r/AskReddit <span className = "feed-span">Posted by u/nick 12 hours ago</span></h3>
            </div>

            <div className = "feed-award">
                <p>⭐</p>
                <p>🤝🏼</p>
                <p>🦭</p>
                <p>🥄</p>
                <p>🧸</p>
            </div>

            <div className = "feed-join">
                <button className = "join">➕ Join</button>
            </div>
            <div className = "feed-main">
                <p>This is test text</p>
            </div>
            <div className = "feed-bottom-bar">
                <button className = "botButton">💬 .. Comments</button>
                <button className = "botButton">↪ Share</button>
                <button className = "botButton">💾 Save</button>
                <button className = "botButton">...</button>
            </div>

        </div>
    );
}

export default Feed;