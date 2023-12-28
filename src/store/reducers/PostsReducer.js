import { CREATE_POST_ACTION } from "../actions/PostActions";

const initialState = {
    posts: [
        { id: '1', title: 'first post', description: 'first description' },
        { id: '2', title: 'second post', description: 'second description' },
    ]
}

export default function PostsReducer(state = initialState, action) {
    if (action.type === CREATE_POST_ACTION) {
        const post = { id: Math.random(), title: 'third post', description: 'third description' }

        const posts = [...state.posts];
        posts.push(post);

        return {
            ...state,
            posts
        }
    }
    return state;
}