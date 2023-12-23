import axios from "axios"
import { Component } from "react"

export default class SinglePostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    componentDidMount() {
        this.getPostDetails();
    }

    componentDidUpdate(){
        if(this.state.post && this.state.post.id === this.props.id) return;
        this.getPostDetails();
    }

    getPostDetails = ()=> {
        axios.get(`https://legacy-react-v17-default-rtdb.firebaseio.com/posts/${this.props.id}.json`)
            .then(response => {
                console.log(' response', response);
                const post = response.data;
                this.setState({
                    post: { ...post, id: this.props.id }
                });
                console.log("state", this.state);
            });
    }

    render() {
        return (<div className="border border-gray-500 p-2 m-2 inline-block">
            <p>single post works!</p>
            <div>
                {this.state.post && <div>
                    <p>id : {this.state.post.id}  </p>
                    <p>title : {this.state.post.title}  </p>
                    <p>description : {this.state.post.description} </p>
                </div>}
            </div>
        </div>)
    }
}