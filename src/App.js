import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import CreatePost from './Pages/CreatePost/CreatePost';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkAutoLogin } from './services/AuthService';


function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        checkAutoLogin(dispatch);
    }, [])
    return (
        <div>
            {/* <p>app works!</p> */}
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    );
}

export default App;
