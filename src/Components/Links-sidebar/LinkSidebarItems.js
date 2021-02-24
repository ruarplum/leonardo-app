import react from "React";
import LinkSidebarItems from "./LinkSidebarItems";
import "./LinkSIdebarItems.css";

const LinkSidebarItems = () => {
    return (
        <div className="LinkSidebar">
            <div className="LinksList">
                <div className="LinksList1">
                    <div className="LinkSidebar1">Help</div>
                    <div className="LinkSidebar2">Reddit App</div>
                    <div className="LinkSidebar3">Reddit Coins</div>
                    <div className="LinkSidebar4">Reddit Premium</div>
                    <div className="LinkSidebar5">Reddit Gifts</div>
                    <div className="LinkSidebar6">Communities</div>
                    <div className="LinkSidebar7">Rereddit</div>
                    <div className="LinkSidebar8">Topics</div>
                </div>
                <div className="LinksList2">
                    <div className="LinkSidebar9">About</div>
                    <div className="LinkSidebar10">Careers</div>
                    <div className="LinkSidebar11">Press</div>
                    <div className="LinkSidebar12">Advertise</div>
                    <div className="LinkSidebar13">Blog</div>
                    <div className="LinkSidebar14">Terms</div>
                    <div className="LinkSidebar15">Content Policy</div>
                    <div className="LinkSidebar16">Privacy Policy</div>
                    <div className="LinkSidebar17">Mod Policy</div>
                </div>
            </div>
            <div className="RedditRights">Reddit Inc 2021.All rights reserved</div>
        </div>
    )
}


export default LinkSidebarItems;