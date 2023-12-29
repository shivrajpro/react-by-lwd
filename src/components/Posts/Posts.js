import { Component } from "react";
import { connect } from "react-redux";
import { CreatePostAction, deletePostAction, getPostsAction } from "../../store/actions/PostActions";
import { bindActionCreators } from "redux";
import { Link, Route, Switch } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";
import EditPost from "../EditPost/EditPost";

class Posts extends Component {
    onCreatePost() {
        this.props.CreatePostAction();
    }

    componentDidMount() {
        if (this.props.posts && !this.props.posts.length)
            this.props.getPostsAction();
    }

    onDeletePost(postId) {
        if(window.confirm("Are you sure delete this post?"))
            this.props.deletePostAction(postId, this.props.history);
    }

    render() {
        const posts = [];

        for (const post of this.props.posts) {
            posts.push(<div key={post.id}
                className="my-2 mr-2 p-2 shadow-md border border-gray-600">
                <div>
                    <span className="text-bold">Title:</span> {post.title}
                </div>
                <div>
                    <span className="mr-2 text-bold">Description:</span>
                    {post.description}
                </div>
                <div className="underline">
                    <Link className="mr-2" to={{ pathname: `/posts/${post.id}` }} >
                        view details
                    </Link>
                    <Link className="mr-2" to={{ pathname: `/posts/edit/${post.id}` }} >
                        edit
                    </Link>
                    <button className="mr-2 bg-red-500 text-white px-2"
                        onClick={() => this.onDeletePost(post.id)} >
                        delete
                    </button>
                </div>
            </div>
            );
        }
        return (<div className="p-2 my-2">
            <Link to='/create-post'
                className="bg-red-500 text-white p-2 my-2">create post</Link>
            <p className="text-bold text-lg my-2" >Posts List</p>
            <div className="flex flex-wrap" > {posts} </div>
            <div>
                {this.props.posts.length &&
                    <div>
                        <Switch>
                            <Route path="/posts/:id" exact component={SinglePost} />
                            <Route path="/posts/edit/:id" component={EditPost} />
                        </Switch>
                    </div>
                }
                {/* <Route path="/posts/:id" component={SinglePost} /> */}
                {/* <SinglePost/>  */}
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts } //will be sent as props to component
}



const mapDispatchToProps = (dispatch) => {
    // return { CreatePost: () => dispatch(CreatePostAction()) } //will be sent as props to component
    // return bindActionCreators({ CreatePost: CreatePostAction }, dispatch)
    return bindActionCreators({ CreatePostAction, getPostsAction, deletePostAction }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);