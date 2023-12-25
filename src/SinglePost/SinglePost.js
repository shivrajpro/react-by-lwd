import { Component } from "react";

export default class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postName: ''
        }
        console.log("SinglePost", props);
    }

    componentDidMount() {
        this.getPosts();
    }

    componentDidUpdate(prevProps){
        console.log("[SinglePost] componentDidUpdate", prevProps);
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
                postName = 'No post selected';
                break;
        }
        this.setState({
            postName
        });
    }
    
    render() {
        return <div>
            <p>single post works!</p>
            <p> Post : {this.state.postName} </p>
            <p> {this.props.match?.params?.id} </p>
        </div>
    }
}