import { Component } from "react";
import ButtonContext from "../../Context/ButtonContext";

export default class Navigation extends Component{
    static contextType = ButtonContext;
    render(){
        return <div>
            <h1>{this.props.name}</h1>
            <h2>{this.context}</h2>
        </div>
    }
}