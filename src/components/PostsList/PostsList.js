import { connect } from "react-redux"
import { incrementCount } from "../../store/actions/PostsAction"
import { getActivePosts } from "../../store/selectors/PostsSelectors";

function PostsList(props) {
    return (
        <div>
            <p>posts list works!</p>
            <p> Count is: {props.count} </p>
            <button className="bg-red-500 text-white p-2 my-2"
                onClick={() => props.increment()}
            >increment</button>
            <div>
                {props.posts.map(post => {
                    return <div key={post.id} > {post.title} </div>
                })}
            </div>
        </div>
    )
}

function getFilteredPosts(posts, filter) {
    console.log('getFilteredPosts'); 
    //gets called even if are just incrementing the counter
    switch (filter) {
        case 'SHOW_ACTIVE':
            return posts.filter(p => p.isActive)
        case 'SHOW_INACTIVE':
            return posts.filter(p => !p.isActive)

        default: return posts

    }
}

const mapStateToProps = (state) => {
    return { posts: getActivePosts(state), count: state.count }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);