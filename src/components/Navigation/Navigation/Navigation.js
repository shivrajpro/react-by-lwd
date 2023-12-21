import ButtonContext from "../../../Context/ButtonContext";

const { Component } = require("react");

class Navigation extends Component {
    static btnContext = ButtonContext;
    render() {
        return (<div>
            <h2> {this.props.name} </h2>
            <h2> {this.btnContext} </h2>
        </div>)
    }
}

export default Navigation;