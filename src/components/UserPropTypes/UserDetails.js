import { Component } from "react";
import PropTypes from "prop-types";

export default class UserDetails extends Component{

    render(){
        return (<div>
            <h2>In UserDetails</h2>
            <p>Id: {this.props.id} & Name: {this.props.name} </p>
        </div>)
    }
}

UserDetails.defaultProps = {
    name:'shivraj'
}

UserDetails.propTypes = {
    id:PropTypes.number.isRequired,
    name: PropTypes.string
}