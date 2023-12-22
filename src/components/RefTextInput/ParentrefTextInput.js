import React, { Component } from "react";
import RefTextInput from "./RefTextInput";

export default class ParentRefTextInput extends Component{
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }

    componentDidMount(){
        // console.log("componentDidMount", this.componentRef.current);
        // this.componentRef.current.onFocusInput("from parent");
        // this.componentRef.current.focusInput();
    }
    render(){
        return (
            <div>
                <h2>Parent Ref text input</h2>
                <RefTextInput ref={this.componentRef} />
            </div>
        )
    }
}