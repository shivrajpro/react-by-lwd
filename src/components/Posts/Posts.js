import { Component } from "react";
import { AddPost } from "../AddPost/AddPost";
import axios from '../../axiosinstance'
import FunctionalSinglePostDetails from "../FunctionalSinglePostDetails/FunctionalSinglePostDetails";
import { Post } from "../Post/Post";

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null,
            isAddPost: false
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        // console.log('getPosts');
        this.setState({
            isAddPost: false
        })
        // return;
        axios.get(`posts.json`)
            .then(response => {
                const postsResponse = response.data;

                // console.log('>> postsResponse', postsResponse);
                const posts = [];
                for (const postId in postsResponse) {
                    const post = {
                        id: postId,
                        title: postsResponse[postId].title,
                        description: postsResponse[postId].description,
                    };
                    // console.log(post);
                    posts.push(post);
                }

                // console.log('>> posts',posts);
                this.setState({
                    posts
                });

            });
    }

    postClickedHandler(postId, event) {
        // console.log('>> postId', postId, " event", event);
        this.setState({
            selectedPostId: postId
        })
        console.log("state", this.state);
    }

    postDeleteHandler(postId, event){
        event.stopPropagation();
        if(window.confirm("Are you sure to delete this post?")){
            axios.delete(`/posts/${postId}.json`)
            .then(response=>{
                console.log('postDeleteHandler response', response);
                this.getPosts();
            })
        }
    }

    addPostHandler(postId, event) {
        // event.preventDefault();
        this.setState({
            isAddPost: true
        })
    }

    render() {
        const posts = this.state.posts.map((p) => {
            return <Post key={p.id} post={p} 
            postClicked={this.postClickedHandler.bind(this, p.id)} 
            postDeleteClicked={this.postDeleteHandler.bind(this, p.id)}
            />
        })
        return <div>
            <p>posts works!</p>
            <div className="m-2" >
                <button className="bg-blue-500 p-2 text-white" 
                onClick={this.addPostHandler.bind(this)}
                >
                    Create Post
                </button>
            </div>
            <div className="flex flex-wrap" >
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
            <div className="m-2" >
                {this.state.isAddPost && <AddPost onPostAdded={this.getPosts.bind(this)} />}
            </div>
        </div>
    }
}