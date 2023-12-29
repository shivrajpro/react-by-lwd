import { connect } from "react-redux"
import { getPost } from "../../store/selectors/PostsSelectors";

function SinglePost(props) {
    return (
        <div>
            <p>single post works!</p>
            <p>Title: {props.post.title} </p>
        </div>
    )
}


const makeStateToProps = () => {
    console.log('SinglePost makeStateToProps');

    const getPostDetails = getPost();

    return (state, props) => {
        return {
            post: getPostDetails(state, props)
        }
    }
}
const mapStateToProps = (state, props) => {
    console.log('SinglePost mapStateToProps');
    return {
        post: getPost(state, props)
    }
}

export default connect(makeStateToProps)(SinglePost);