import { CREATE_POST_ACTION, CREATE_POST_SUCCESS, GET_POSTS_SUCCESS } from "../actions/PostActions";

// posts: [
//     { id: '1', title: 'first post', description: 'first description' },
//     { id: '2', title: 'second post', description: 'second description' },
// ]
const initialState = {
    posts: []
}

export default function PostsReducer(state = initialState, action) {
    //reducers are pure function we cannot make async calls here
    if (action.type === CREATE_POST_ACTION) {
        const post = { id: Math.random(), title: 'third post', description: 'third description' }

        const posts = [...state.posts];
        posts.push(post);

        return {
            ...state,
            posts
        }
    }

    if(action.type === GET_POSTS_SUCCESS){
        return {
            ...state,
            posts: action.payload
        }
    }

    if(action.type === CREATE_POST_SUCCESS){
        const posts = [...state.posts];
        posts.push(action.payload);

        return {
            ...state,
            posts
        }
    }
    return state;
}