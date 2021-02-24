const Sidebar = (props) => {
    return (
        <div className="communitySidebarContainer">

            <div className="communityArea">
                <div className="imagelogo">
                    <img src={props.image} alt={props.text} className="communitylogos" />
                </div>
                <div className="communitytext">
                    <p>{props.text}</p>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;

 