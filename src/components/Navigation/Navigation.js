import { Component } from "react";
import ButtonContext from "../../Context/ButtonContext";

export default class Navigation extends Component {
    static contextType = ButtonContext;
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}