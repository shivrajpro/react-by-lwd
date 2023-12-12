import { Component } from "react";

class HelloWorld extends Component {
    render() {
        return (
            <div>Hello World, {this.props.text} </div>
        )
    }
}

export default HelloWorld;