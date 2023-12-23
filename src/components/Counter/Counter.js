import { useEffect, useRef, useState } from "react"

const Counter = () => {
    const isMounted = useRef(false);
    const [counter, setCounter] = useState(0);
    const [x, setX] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1);
    }

    useEffect(() => {
        // whenever the component is mounted or
        // a state variable is changed
        console.log('fires on mounted and also update');
        document.title = 'count: ' + counter;
    })

    useEffect(() => {
        // whenever the component is mounted or
        // a state variable is changed
        console.log('COUNTER & THE X : fires on mounted and also update');
        document.title = 'count: ' + counter;
    }, [counter, x])

    useEffect(() => {
        console.log('COUNTER fires only on mounted');
    }, [counter])

    useEffect(() => {
        console.log('THE X fires only on mounted');
    }, [x])

    // when component unmounted & also update
    useEffect(() => {
        return () => {
            console.log('when unmounted & updated');
        }
    })

    // when component only unmounted
    useEffect(() => {
        return () => {
            console.log('when ONLY unmounted');
        }
    }, [])


    useEffect(() => {
        if (isMounted.current) {
            console.log('ISMOUNTED : fires when updated');
        } else {
            isMounted.current = true;
        }
    })

    return (
        <div>
            <p>counter works!</p>
            <p>Counter : {counter}</p>
            <button className='mx-2 bg-red-500 px-3 py-1 text-white'
                onClick={() => setCounter(counter + 1)}
            >increment counter</button>
            <button className='mx-2 bg-red-500 px-3 py-1 text-white'
                onClick={() => setX(x + 1)}
            >increment x</button>
            {/* 
            <button className='bg-red-500 px-3 py-1 text-white'
                onClick={increaseCounter}
            >increment</button>
        
 */}
        </div>
    )
}

export default Counter;