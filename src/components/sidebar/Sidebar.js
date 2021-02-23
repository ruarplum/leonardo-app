import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <br/>
                <img src={this.props.image} alt={this.props.text} className="logo1" />
                <p>{this.props.text}</p>
            </div>
        )
    }
}
export default Sidebar;

