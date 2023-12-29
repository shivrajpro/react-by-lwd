import axios from "axios";

export function getPosts() {
    return axios.get(`https://legacy-react-v17-default-rtdb.firebaseio.com/posts.json`);
}

export function CreatePost(postData) {
    return axios.post(`https://legacy-react-v17-default-rtdb.firebaseio.com/posts.json`, postData);
}

export function updatePost(postData, postId) {
    return axios.put(
        `https://legacy-react-v17-default-rtdb.firebaseio.com/posts/${postId}.json`, 
        postData
    );
}

export function deletePost(postId) {
    return axios.delete(
        `https://legacy-react-v17-default-rtdb.firebaseio.com/posts/${postId}.json`
    );
}

export function formatPosts(postsResponse) {
    const posts = [];
    for (const postId in postsResponse) {
        const post = {
            id: postId,
            ...postsResponse[postId]
        }
        posts.push(post);
    }
    
    return posts;
}