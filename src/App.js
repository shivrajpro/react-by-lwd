import { BrowserRouter, HashRouter, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
    return (
        // basename="/leela" 
        <HashRouter hashType="noslash" >
            <div className='p-2 border border-gray-500 container mx-auto'>
                <p>app works!</p>
                <Header />
                <div>
                    <Route path='/' component={Home} />
                    <Route path='/about' component={About} />
                </div>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
