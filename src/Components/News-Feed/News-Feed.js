import "./News-Feed.css";


const Feed = () => {
    return ( 
        /* This will create main box for content to sit within*/
    <div className = "feed-box global">
       
            <div className = "feed-sidebar global">
                <button className = "Arrow global">⬆</button>
                <p className ="arrowNumber global">number</p>
                <button className = "Arrow global">⬇</button>
            </div>

        <div className = "feed-right-wrapper global">
<div className = "feed-right-top global">
            <div className = "feed-com-post global">
                <h3 className="global">r/AskReddit <span className = "feed-span global">Posted by u/nick 12 hours ago</span></h3>
            </div>

            <div className = "feed-award global">
                <p>⭐</p>
                <p>🤝🏼</p>
                <p>🦭</p>
                <p>🥄</p>
                <p>🧸</p>
            </div>

            <div className = "feed-join global">
                <button className = "join global">➕ Join</button>
            </div>
</div>
            <div className = "feed-main global">
                <p>This is test text</p>
            </div>

            <div className = "feed-bottom-bar global">
                <button className = "botButton global">💬 .. Comments</button>
                <button className = "botButton global">↪ Share</button>
                <button className = "botButton global">💾 Save</button>
                <button className = "botButton global">...</button>
            </div>

        </div>

    </div>
    );
}

export default Feed;