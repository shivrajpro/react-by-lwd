import { Component } from "react";
import { Post } from "../Post/Post";
import axios from "axios";

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(`https://legacy-react-v17-default-rtdb.firebaseio.com/posts.json`)
            .then(response => {
                const postsResponse = response.data;

                console.log('>> postsResponse', postsResponse);
                const posts = [];
                for (const postId in postsResponse) {
                    const post = {
                        id: postId,
                        title: postsResponse[postId].title,
                        description: postsResponse[postId].description,
                    }
                    // console.log(post);
                    posts.push(post)
                }

                // console.log('>> posts',posts);
                this.setState({
                    posts
                })

                console.log("state", this.state.posts);
            })
    }
    render() {
        const posts = this.state.posts.map((p)=>{
            return <Post key={p.id} post={p} />
        })
        return <div>
            <p>posts works!</p>
            <div className="flex" >
                {posts}
            </div>
            <div>
                {!this.state.posts.length && <p>No posts found!</p>}
            </div>
        </div>
    }
}