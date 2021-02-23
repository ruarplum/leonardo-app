const Sidebar = (props) => {
    return (
        <div className="container">

            <div className="communitieaList">
                <img src={props.image} alt={props.text} className="logo1" />
                <p>{props.text}</p>
            </div>

        </div>
    );
};

export default Sidebar;

