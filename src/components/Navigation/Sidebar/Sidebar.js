import Navigation from "../Navigation/Navigation";

const { Component } = require("react");

class Sidebar extends Component{
    render(){
        return <div>
            <Navigation name={this.props.name} />
        </div>
    }
}

export default Sidebar;