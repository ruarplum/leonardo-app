const Sidebar = (props) => {
    return (
        <div className="container">

            <div className="communityList">
                <div className="imagelogo">
                    <img src={props.image} alt={props.text} className="logos" />
                </div>
                <div className="communitytext">
                    <p>{props.text}</p>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;

 