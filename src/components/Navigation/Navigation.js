import { Component } from "react";
import ButtonContext from "../../Context/ButtonContext";
import UserContext from "../../Context/UserContext";

export default class Navigation extends Component {
    static contextType = ButtonContext;
    render() {
        return <div>
            {/* <h1>{this.props.name}</h1> */}
            <ButtonContext.Consumer>
                {
                    value => {
                        return <div>
                            <a href="#"> {value} </a>
                            <UserContext.Consumer>
                                {
                                    (userValue) => {
                                        return <div> {userValue.greet()}  </div>
                                    }
                                }
                            </UserContext.Consumer>
                        </div>
                    }
                }
            </ButtonContext.Consumer>
            {/* <h2>{this.context}</h2> */}
        </div>
    }
}