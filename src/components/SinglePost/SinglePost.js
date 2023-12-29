import { connect } from "react-redux";
import { getPost } from "../../store/selectors/PostSelectors";

function SinglePost(props) {
    // console.log('props',props);
    return (
        <div>
            <p>single post works!</p>
            {props.post &&
                <div>
                    <p>
                        <span className="font-bold" >Id : </span>
                        {props.post.id}
                    </p>
                    <p>
                        <span className="font-bold" >Title : </span>
                        {props.post.title}
                    </p>
                    <p>
                        <span className="font-bold" >Description : </span>
                        {props.post.description}
                    </p>
                </div>
            }
        </div>
    )
}

const makeStateToProps = () => {
    const getPostDetails = getPost();
    return (state, props) => {
        return {
            post: getPostDetails(state, props.match.params.id)
        }
    }
}
export default connect(makeStateToProps)(SinglePost);