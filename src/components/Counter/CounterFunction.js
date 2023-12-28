import { useEffect, useState } from "react"
import { store } from "../../Store/store";
import { decrement, increment } from "../../Store/actions/CounterActions";

export function CounterFunction(props) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        updateCounter();
        store.subscribe(updateCounter);
    }, []) //componentDidMount


    function onIncrement() {
        // setCounter(counter + 1);
        store.dispatch(increment());
    }

    function onDecrement() {
        // setCounter(counter - 1);
        store.dispatch(decrement());
    }

    function updateCounter() {
        const state = store.getState();
        setCounter(state.counter);
        // console.log('state', state);
    }
    return (<div>
        <p>counter function works!</p>
        <p>{counter}</p>
        <div>
            <button className='mx-2 bg-red-500 px-3 py-1 text-white'
                onClick={onIncrement} >
                increment
            </button>
            <button className='bg-red-500 px-3 py-1 text-white'
                onClick={onDecrement} >
                decrement
            </button>
        </div>
    </div>)
}