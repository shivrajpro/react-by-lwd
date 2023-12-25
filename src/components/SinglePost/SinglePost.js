import { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

export default class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postName: null
        }
        console.log("[SinglePost] props", props);
    }

    componentDidMount() {
        this.getPosts();
    }

    componentDidUpdate(prevProps){
        console.log("[SinglePost] componentDidUpdate prevProps", prevProps);
        if(prevProps.match.params.id !== this.props.match.params.id)
            this.getPosts();
    }

    getPosts() {
        let postName = '';
        switch (this.props.match?.params?.id) {
            case '1':
                postName = 'Post One Details';
                break;
            case '2':
                postName = 'Post Two Details';
                break;
            case '3':
                postName = 'Post Three Details';
                break;
            default:
                postName = '';
                this.props.history.push('/about');
                break;
        }
        this.setState({
            postName
        });
    }
    
    render() {
/* 
        let postRedirect = null;
        if(this.state.postName === ''){
            postRedirect = <Redirect to='/about' />
        }

 */        
        return <div>
            <p>single post works!</p>
            {/* {postRedirect} */}
            <p> Post : {this.state.postName} </p>
            <p> {this.props.match?.params?.id} </p>
        </div>
    }
}