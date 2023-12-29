import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import CreatePost from './components/CreatePost/CreatePost';


function App() {
    return (
        <div>
            {/* <p>app works!</p> */}
            <BrowserRouter>
                <div>
                    <Header/>
                    <div>
                        <Switch>
                            <Route path='/posts' component={Posts} />
                            <Route path='/create-post' component={CreatePost} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
