import { createPost, formatPosts, getPosts } from "../../services/PostsServices";

export const CREATE_POST_ACTION = '[Post Actions] create post';
export const CREATE_POST_SUCCESS = '[Post Actions] create post success';
export const GET_POSTS = '[Post Actions] get posts';
export const GET_POSTS_SUCCESS = '[Post Actions] get posts success';

export function getPostsAction() {
    return (dispatch, getState) => {
        getPosts().then(response => {
                const posts = formatPosts(response.data);
                dispatch(getPostsSuccessAction(posts));
            })
    }
}

export function createPostAction(postData, history) {
    return (dispatch)=>{
        createPost(postData).then(response=>{
            const singlePost = {
                id:response.data.name,
                ...postData
            }
            dispatch(createPostSuccessAction(singlePost));
            history.push('/posts');
        })
    }
}

export function getPostsSuccessAction(posts) {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
}

export function createPostSuccessAction(singlePost) {
    return {
        type: CREATE_POST_SUCCESS,
        payload: singlePost
    }
}