import './App.css';
import Counter from './components/Counter/Counter';
import { CounterFunction } from './components/Counter/CounterFunction';

function App() {
    return (
        <div className='p-2 border border-gray-500 container mx-auto'>
            <p>app works!</p>
            <Counter/>
            <CounterFunction/>
        </div>
    );
}

export default App;
