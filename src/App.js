import './App.css';
import Posts from './components/Posts/Posts';

function App() {
    return (
        <div className='m-2 p-2 border border-gray-500 container mx-auto'>
            <p>app works!</p>
            <h1 className='font-bold text-xl my-3' >Posts Data</h1>
            <div> <Posts/> </div>
        </div>
    );
}

export default App;
