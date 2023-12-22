import { Component } from "react";
import UserDetails from "./UserDetails";

export default class UserPropTypes extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[
                {id:1},
                {id:2, name:"leela web dev"},
            ]
        }
    }

    render(){
        return (
            <div>
                <h2>In UserPropTypes</h2>
                <div>
                    {this.state.users.map((u)=>{
                        return <UserDetails key={u.id} id={u.id} name={u.name} />
                    })}
                </div>
            </div>
        )
    }
}