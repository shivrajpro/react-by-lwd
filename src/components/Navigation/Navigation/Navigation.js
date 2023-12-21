import ButtonContext from "../../Context/ButtonContext";

const { Component } = require("react");

class Navigation extends Component {
    static btnContext = ButtonContext;
    render() {
        return (<div>
            <h2> {this.props.name} </h2>
            <h3> {this.btnContext} </h3>
        </div>)
    }
}

export default Navigation;