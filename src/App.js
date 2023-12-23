import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
    const [showCounter, setShowCounter] = useState(true);

    return (
        <div className='m-2 p-2 border border-gray-500 container mx-auto'>
            <p>app works!</p>
            <div> 
                <button className='mx-2 bg-green-500 px-3 py-1 text-white'
                onClick={()=> setShowCounter(!showCounter)}
                >
                    Toggle Component    
                </button> 
            </div>
            <div> {showCounter && <Counter/>} </div>
        </div>
    );
}

export default App;
