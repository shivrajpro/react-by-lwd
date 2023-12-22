import { Component } from "react";
import MouseTracker from "./MouseTracker";

export default class Cat extends Component {
    render() {
        return (
            <MouseTracker render={(mouse) => {
                return <img 
                style={{
                    position:'absolute',
                    left:mouse.x,
                    top:mouse.y
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg" 
                alt="cat" width="200" height="200" />
            }} />
        )
    }
}