import { applyMiddleware, compose, createStore } from "redux";
import PostsReducer from "./reducers/PostsReducer";
import { GET_POSTS, getPostsSuccessAction } from "./actions/PostActions";
import axios from "axios";

// const exampleMiddleware = store => next => action => next(action)
const loggerMiddleware = store => next => action => {
    console.log('dispatching action', action);
    console.log('STATE BEFORE dispatching', store.getState());
    let result = next(action);
    console.log('STATE AFTER dispatching', store.getState());
    return result;

}

const fetchDataMiddleware = store => next => action => {
    if (action.type === GET_POSTS) {
        axios.get(`https://legacy-react-v17-default-rtdb.firebaseio.com/posts.json`)
            .then(response => {
                const postsResponse = response.data;
                console.log('postsResponse', postsResponse);
                // format the response and call get posts success
                const posts = [];
                for (const postId in postsResponse) {
                    const post = {
                        id: postId,
                        ...postsResponse[postId]
                    }
                    posts.push(post);
                }
                store.dispatch(getPostsSuccessAction(posts));
            })
    }
    return next(action);
}
const middleware = applyMiddleware(loggerMiddleware, fetchDataMiddleware);

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(PostsReducer, composedEnhancers(middleware));


/* 
function exampleMiddleWare(store) {
    return function (next) {
        return function (action) {
            return next(action);
        }
    }
}
*/