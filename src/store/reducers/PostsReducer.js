import { INCREMENT_COUNT } from "../actions/PostsAction";

export const initialState = {
    posts:[
        {id:1, title: 'first post', isActive:true, description: 'first description'},
        {id:2, title: 'second post', isActive:true, description: 'second description'},
        {id:3, title: 'third post', isActive:false, description: 'third description'},
        {id:4, title: 'fourth post', isActive:true, description: 'fourth description'},
        {id:5, title: 'fifth post', isActive:false, description: 'fifth description'},
    ],
    filter: 'SHOW_ACTIVE',
    count: 0
}

export default function PostsReducer(state = initialState, action) {
    if(action.type === INCREMENT_COUNT){
        return {
            ...state,
            count: state.count + 1
        }
    }
    return state;
}