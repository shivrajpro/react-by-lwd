import { Component } from "react";

export default class MouseTracker extends Component{
    constructor(props){
        super(props);
        this.state = {x:0, y:0}
    }

    handleMouseMove = (event)=>{
        // console.log('event',event);
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }

    render(){
        return (
            <div className="border border-red-500" 
            style={{height:'100vh', width:'100vw'}} 
            onMouseMove={this.handleMouseMove}
            >
                <h2>Please move the mouse pointer</h2>
                <div>
                    Mouse pointer position is X : {this.state.x}
                    and Y : {this.state.y}
                </div>
                <div> {this.props.render(this.state)} </div>
            </div>
        )
    }
}