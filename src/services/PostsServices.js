import axios from "axios";

export function getPosts() {
    return axios.get(`https://legacy-react-v17-default-rtdb.firebaseio.com/posts.json`);
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