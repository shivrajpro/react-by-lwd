import { connect } from "react-redux";
import { createPostAction, getPostsAction } from "../../store/actions/PostActions";
import { bindActionCreators } from "redux";

const { Component } = require("react");

class Posts extends Component {
    onCreatePost() {
        this.props.createPostAction();
    }

    componentDidMount(){
        this.props.getPostsAction();
    }

    render() {
        const posts = [];

        for (const post of this.props.posts) {
            posts.push(<div key={post.id} className="my-2 mr-2 p-2 shadow-md border border-gray-600">
                <div>
                    <span className="text-bold">Title:</span> {post.title}
                </div>
                <div>
                    <span className="mr-2 text-bold">Description:</span> {post.description}
                </div>
            </div>
            );
        }
        return (<div>
            <button className="bg-red-500 text-white p-2 my-2"
                onClick={this.onCreatePost.bind(this)}
            >create post</button>
            <p className="text-bold text-lg" >Posts List</p>
            <div className="flex flex-wrap" > {posts} </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts } //will be sent as props to component
}

const mapDispatchToProps = (dispatch) => {
    // return { createPost: () => dispatch(createPostAction()) } //will be sent as props to component
    // return bindActionCreators({ createPost: createPostAction }, dispatch)
    return bindActionCreators({ createPostAction, getPostsAction }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);