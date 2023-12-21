import { Component } from "react";
import Navigation from "../Navigation/Navigation";

export default class Sidebar extends Component{
    render(){
        return <div>
            <Navigation name={this.props.name} />
            {/* <h1>In Sidebar</h1> */}
        </div>
    }
}