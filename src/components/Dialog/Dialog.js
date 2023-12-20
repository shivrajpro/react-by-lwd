import { Component } from "react";

class Dialog extends Component {
    render() {
        return <div>
            Dialog works!
            <div> {this.props.children} </div>
            <div> {this.props.addPost} </div>
        </div>
    }
}

export default Dialog;