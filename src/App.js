import { Suspense, lazy, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';

/* 
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Posts from './components/Posts/Posts';
import CreatePost from './Pages/CreatePost/CreatePost';
 */

const SignUp = lazy(() => import(/* webpackChunkName: "SignUp" */ './Pages/SignUp/SignUp'));
const SignIn = lazy(()=> import(/* webpackChunkName: "SignIn" */ './Pages/SignIn/SignIn'));
const Home = lazy(()=> import(/* webpackChunkName: "Home" */ './Pages/Home/Home'));
const Posts = lazy(()=> import(/* webpackChunkName: "Posts" */ './components/Posts/Posts'));
const CreatePost = lazy(()=> import(/* webpackChunkName: "CreatePost" */ './Pages/CreatePost/CreatePost'));

function App(props) {
    // console.log('App', props);
    const dispatch = useDispatch();

    useEffect(() => {
        checkAutoLogin(dispatch, props.history);
    })

    let routes = (
        <Switch>
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/' component={Home} exact />
            <Redirect to='/sign-in' />
        </Switch>
    )

    if (props.isAuth) {
        routes = (
            <Switch>
                <Route path='/posts' component={Posts} />
                <Route path='/create-post' component={CreatePost} />
                <Route path='/' component={Home} exact />
                <Redirect to='/' />
            </Switch>

        )
    }
    return (
        <div>
            {/* <p>app works!</p> */}
            <div>
                <Header />
                <div>
                    <Suspense fallback={<p>loading...</p>} >
                        {routes}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: isAuthenticated(state)
    }
}

export default withRouter(connect(mapStateToProps)(App));
