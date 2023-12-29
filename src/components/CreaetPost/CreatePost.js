import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../store/actions/PostActions";

export default function CreatePost(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    function onCreatePost(e) {
        e.preventDefault();

        const postData = {
            title,
            description
        }
        dispatch(createPostAction(postData, props.history));
        // props.history.push('/posts');
    }
    return (
        <div className="p-2" >
            <div className="flex justify-between" >
                <h2 className="font-bold text-lg my-2">create post works!</h2>
                <Link to='/posts' className="bg-gray-500 text-white p-2 my-2">Back to Posts</Link>
            </div>
            <div>
                <form onSubmit={onCreatePost} >
                    <div>
                        <label>Title</label>
                        <div>
                            <input type="text" className="border border-gray-500 px-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Description</label>
                        <div>
                            <textarea className="border border-gray-500 px-2"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="bg-green-500 text-white p-2" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}