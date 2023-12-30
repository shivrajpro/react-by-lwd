import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import CreatePost from './Pages/CreatePost/CreatePost';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import { checkAutoLogin } from './services/AuthService';


function App(props) {
    console.log('App', props);
    const dispatch = useDispatch();

    useEffect(() => {
        checkAutoLogin(dispatch, props.history);
    })

    return (
        <div>
            {/* <p>app works!</p> */}
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route path='/posts' component={Posts} />
                        <Route path='/create-post' component={CreatePost} />
                        <Route path='/sign-up' component={SignUp} />
                        <Route path='/sign-in' component={SignIn} />
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default withRouter(App);
