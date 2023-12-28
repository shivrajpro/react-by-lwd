export const CREATE_POST_ACTION = '[Post Actions] create post';
export const GET_POSTS = '[Post Actions] get posts';
export const GET_POSTS_SUCCESS = '[Post Actions] get posts success';

export function createPostAction() {
    return {
        type: CREATE_POST_ACTION
    }
}

export function getPostsAction() {
    return {
        type: GET_POSTS
    }
}

export function getPostsSuccessAction(posts) {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
}