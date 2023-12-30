import { CreatePost, formatPosts, getPosts, updatePost, deletePost } from "../../services/PostsServices";
import {
    GET_POSTS_SUCCESS,
    CREATE_POST_SUCCESS,
    EDIT_POST_SUCCESS,
    DELETE_POST_SUCCESS
} from "./PostTypes";

export function getPostsAction() {
    return (dispatch, getState) => {
        const state = getState();
        // console.log('state',state);
        const token = state.auth.auth.idToken;
        // have to pass token this way to every request
        // if we dont use interceptors
        getPosts(token).then(response => {
            const posts = formatPosts(response.data);
            dispatch(getPostsSuccessAction(posts));
        })
    }
}

export function CreatePostAction(postData, history) {
    return (dispatch) => {
        CreatePost(postData).then(response => {
            const singlePost = {
                id: response.data.name,
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

export function editPostAction(postData, history) {
    return (dispatch) => {
        updatePost(postData).then(response => {
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
    return (dispatch) => {
        deletePost(postId).then(response => {
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