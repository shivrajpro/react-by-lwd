import axios from "axios";
import { useState } from "react"

export function AddPost(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function createPostHandler(e){
        e.preventDefault();
        console.log('title',title);
        console.log('description',description);
        const postData = {
            title,
            description
        }

        axios.post(`/posts.json`, postData)
        .then(response=>{
            // console.log(' response',response);
            setTitle(''); setDescription('');
            props.onPostAdded();
        })
    }
    return (
        <div>
            <h1 className="font-bold text-2xl" >add post works!</h1>
            <form onSubmit={createPostHandler} >
                <div className="mb-2" >
                    <label className="block">Title:</label>
                    <input type="text" className="border border-gray-400 my-2 px-2" 
                    placeholder="enter title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div className="mb-2" >
                    <label className="block">Description:</label>
                    <textarea className="border border-gray-400 my-2 px-2" 
                    placeholder="enter description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                </div>
                <div className="mb-2" >
                    <button type="submit" className="m-2 bg-red-500 p-2 text-white" >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}