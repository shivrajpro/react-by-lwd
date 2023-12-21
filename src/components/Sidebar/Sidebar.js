import { Component } from "react";

export default class Sidebar extends Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}