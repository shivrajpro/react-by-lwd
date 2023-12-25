import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';
import { Posts } from './components/Posts/Posts';

function App() {
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
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/posts/:id' component={Posts} />
                        <Route path='/' render={(props) => <Home {...props} />} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
