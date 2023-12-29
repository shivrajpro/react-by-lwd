import { CreatePost, formatPosts, getPosts, updatePost, deletePost } from "../../services/PostsServices";

export const CREATE_POST_ACTION = '[Post Actions] create post';
export const CREATE_POST_SUCCESS = '[Post Actions] create post success';
export const GET_POSTS = '[Post Actions] get posts';
export const GET_POSTS_SUCCESS = '[Post Actions] get posts success';
export const EDIT_POST = '[Post Actions] edit post';
export const EDIT_POST_SUCCESS = '[Post Actions] edit post success';
export const DELETE_POST = '[Post Actions] delete post';
export const DELETE_POST_SUCCESS = '[Post Actions] delete post success';

export function getPostsAction() {
    return (dispatch, getState) => {
        getPosts().then(response => {
                const posts = formatPosts(response.data);
                dispatch(getPostsSuccessAction(posts));
            })
    }
}

export function CreatePostAction(postData, history) {
    return (dispatch)=>{
        CreatePost(postData).then(response=>{
            const singlePost = {
                id:response.data.name,
                ...postData
            }
            dispatch(CreatePostSuccessAction(singlePost));
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

export function CreatePostSuccessAction(singlePost) {
    return {
        type: CREATE_POST_SUCCESS,
        payload: singlePost
    }
}

export function editPostAction(postData, history){
    return (dispatch)=>{
        updatePost(postData).then(response=>{
            dispatch(editPostSuccess(postData));
            history.push('/posts');
        })
    }
}

export function editPostSuccess(updatedPost) {
    return {
        type: EDIT_POST_SUCCESS,
        payload: updatedPost
    }
}

export function deletePostAction(postId, history) {
    return (dispatch)=>{
        deletePost(postId).then(response=>{
            dispatch(deletePostSuccess(postId));
            history.push('/posts');
        })
    }
}

export function deletePostSuccess(postId) {
    return {
        type: DELETE_POST_SUCCESS,
        payload: postId
    }
}