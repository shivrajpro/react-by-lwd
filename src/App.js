import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App() {
    return (
        <div className='p-2 border border-gray-500 container mx-auto'>
            <p>app works!</p>
            <Header />
            <Posts />
        </div>
    );
}

export default App;
