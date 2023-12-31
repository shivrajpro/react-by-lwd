import axiosInstance from "./AxiosInstance";

const postsUrl = 'https://legacy-react-v17-default-rtdb.firebaseio.com';

export function getPosts(token) {
    return axiosInstance.get(`${postsUrl}/posts.json`);
}

export function CreatePost(postData) {
    return axiosInstance.post(`${postsUrl}/posts.json`, postData);
}

export function updatePost(postData) {
    return axiosInstance.patch(
        `${postsUrl}/posts/${postData.id}.json`, 
        postData
    );
}

export function deletePost(postId) {
    return axiosInstance.delete(
        `${postsUrl}/posts/${postId}.json`
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