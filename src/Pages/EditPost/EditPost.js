import { useEffect, useState } from "react";
import { getPost } from "../../store/selectors/PostSelectors";
import { connect, useDispatch } from "react-redux";
import { editPostAction } from "../../store/actions/PostActions";

function EditPost(props) {
    // console.log('EditPost',props.post);
    const [post, setPost] = useState(props.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        setPost(props.post);
    }, [props.post])

    function onUpdatePost(e) {
        e.preventDefault();
        dispatch(editPostAction(post, props.history));
    }

    return (
        <div>
            <p>EditPost works!</p>
            <form onSubmit={onUpdatePost} >
                    <div>
                        <label>Title</label>
                        <div>
                            <input type="text" 
                            className="border border-gray-500 px-2"
                                value={post.title}
                                onChange={(e) => setPost({
                                    ...post, 
                                    title:e.target.value
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Description</label>
                        <div>
                            <textarea className="border border-gray-500 px-2"
                                value={post.description}
                                onChange={(e) => setPost({
                                    ...post, 
                                    description:e.target.value
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" 
                        className="bg-green-500 text-white p-2" >
                            Update
                        </button>
                    </div>
                </form>            
        </div>
    )
}

const makeStateToProps = ()=>{
    const getPostDetails = getPost();
    return (state, props)=>{
        return { post: getPostDetails(state, props.match.params.id) }
    }
}

export default  connect(makeStateToProps)(EditPost);