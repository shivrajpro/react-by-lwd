import axios from "axios";
import { useEffect, useState } from "react";
export default function FunctionalSinglePostDetails(props) {
    const [post, setPost] = useState(null);

    // fires on component mounted and state update
    useEffect(()=>{
        if(post && post.id === props.id) return;
        getPostDetails();
    })

    function getPostDetails() {
        axios.get(`https://legacy-react-v17-default-rtdb.firebaseio.com/posts/${props.id}.json`)
            .then(response => {
                console.log(' response', response);
                setPost({...response.data, id:props.id})
            });
    }    
    return (
        (<div className="border border-gray-500 p-2 m-2 inline-block">
        <p>FunctionalSinglePostDetails works!</p>
        <div>
            {post && <div>
                <p>id : {post.id}  </p>
                <p>title : {post.title}  </p>
                <p>description : {post.description} </p>
            </div>}
        </div>
    </div>)        
    )
}