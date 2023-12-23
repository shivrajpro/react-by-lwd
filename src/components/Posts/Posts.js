import { Component } from "react";
import { Post } from "../Post/Post";
import axios from "axios";
import SinglePostDetails from "../SinglePostDetails/SinglePostDetails";
import FunctionalSinglePostDetails from "../FunctionalSinglePostDetails/FunctionalSinglePostDetails";

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null
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

                // console.log("[state] posts", this.state.posts);
            })
    }

    postClickedHandler(postId, event) {
        // console.log('>> postId', postId, " event", event);
        this.setState({
            selectedPostId: postId
        })
        console.log("state", this.state);
    }

    render() {
        const posts = this.state.posts.map((p) => {
            return <Post key={p.id} post={p} postClicked={this.postClickedHandler.bind(this, p.id)} />
        })
        return <div>
            <p>posts works!</p>
            <div className="flex" >
                {posts}
            </div>

            {this.state.selectedPostId &&
                <div>
                    <h2 className="text-bold" >Post Details</h2>
                    {/* <SinglePostDetails id={this.state.selectedPostId} /> */}
                    <FunctionalSinglePostDetails id={this.state.selectedPostId} />
                </div>
            }
            <div>
                {!this.state.posts.length && <p>No posts found!</p>}
            </div>
        </div>
    }
}