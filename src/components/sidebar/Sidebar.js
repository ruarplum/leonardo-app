import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt={this.props.text}/>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
export default Sidebar;

