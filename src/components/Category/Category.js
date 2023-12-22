import { Component } from "react";
import { WithCategory } from "./WithCategory";

class Category extends Component{
    render(){
        return (
            <div> 
                <h2>in Category</h2> 
                <h3>the name prop: {this.props.name} </h3>
                <div>
                    {this.props.categories.map(c=>{
                        return <div key={c} >category name : {c} </div>
                    })}
                </div>
            </div>
        )
    }
}

export default WithCategory(3)(Category);