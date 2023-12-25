import { Suspense, lazy } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

const About = lazy(/* webpackChunkName: "[About]" */() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Posts = lazy(() => import("./components/Posts/Posts"));
const PageNotFound = lazy(() => import("./components/PageNotFound/PageNotFound"));

function App() {
    const isAuth = true;
    return (
        // basename="/leela" 
        <BrowserRouter>
            {/* <p>app works!</p> */}
            <Header />
            <div className='p-2 border border-gray-500 container mx-auto'>
                <div>
                    {/* <Route path='/' exact render={(props) => <Home {...props} />} /> */}
                    {/* <Route path='/' exact children={() => <div>hi from children</div>} /> */}
                    {/* <Route path='/' exact>
                        <Home />
                    </Route> */}
                    {/* <Route path='/home' exact component={Home} /> */}
                    <Suspense fallback={<div>loading...</div>} >
                        <Switch>
                            {isAuth && (<Route path='/about' component={About} />)}

                            <Route path='/contact' component={Contact} />
                            <Route path='/posts' component={Posts} />
                            <Redirect from="/" to="/posts" exact />
                            {/* will be redirected if anything apart from configured routes is found*/}
                            <Route path="*" render={(props) => <PageNotFound />} />
                            {/* <Route path='/' render={(props) => <Home {...props} />} /> */}
                        </Switch>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
