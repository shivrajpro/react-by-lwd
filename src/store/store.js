import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import PostsReducer from "./reducers/PostsReducer";
import AuthReducer from "./reducers/AuthReducers";

// const exampleMiddleware = store => next => action => next(action)

/* 
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
*/
const middleware = applyMiddleware(thunk);

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    posts:PostsReducer,
    auth: AuthReducer
});
export const store = createStore(reducers, composedEnhancers(middleware));


/* 
function exampleMiddleWare(store) {
    return function (next) {
        return function (action) {
            return next(action);
        }
    }
}
*/