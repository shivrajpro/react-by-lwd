import { Component } from "react";

export default class CallbackRefTextInput extends Component{
    constructor(props){
        super(props);
        this.textInput = null;
        this.inputRef = (element)=>{
            this.textInput = element;
        }
    }

    componentDidMount(){
        console.log("componentDidMount",this.textInput);
        this.textInput.focus();
        this.textInput.value = 'leela web dev'
    }
    render(){
        return (
            <div className="my-3">
                <h2>In CallbackRefTextInput</h2>
              <input type="text" className="border border-gray-500" ref={this.inputRef} />
            </div>
        )
    }
}