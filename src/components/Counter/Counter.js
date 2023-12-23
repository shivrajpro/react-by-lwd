import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <p>counter works!</p>
            <p>Counter : {counter}</p>
            <button className='mx-2 bg-red-500 px-3 py-1 text-white'
                onClick={() => setCounter(counter + 1)}
            >increment</button>
            <button className='bg-red-500 px-3 py-1 text-white'
                onClick={increaseCounter}
            >increment</button>
        </div>
    )
}

export default Counter;