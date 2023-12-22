import React, { Component } from "react";

class ForwardingRefButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="my-3" >
                <button className="px-5 py-3 bg-red-500 text-white" ref={this.props.buttonRef} >
                    Click Me from Child
                </button>
            </div>
        )
    }
}

export default React.forwardRef((props, ref)=>{
    return <ForwardingRefButton buttonRef={ref} {...props} />
})