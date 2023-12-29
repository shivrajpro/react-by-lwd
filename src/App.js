import './App.css';
import PostsList from './components/PostsList/PostsList';

function App() {
    return (
        <div className='container m-2'>
            <h2>app works!</h2>
            <button className="bg-red-500 text-white p-2 my-2">Tailwind</button>
            <div>
                <PostsList/>
            </div>
        </div>
    );
}

export default App;
