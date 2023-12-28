import { Component } from "react";
import { store } from "../../Store/store";
import { increment, decrement } from "../../Store/actions/CounterActions";

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { counter: 0 };
    }

    componentDidMount() {
        this.updateCounter();
        store.subscribe(this.updateCounter.bind(this));
    }

    onIncrement(){
        store.dispatch(increment());
    }

    onDecrement(){
        store.dispatch(decrement());
    }

    updateCounter() {
        const state = store.getState();
        this.setState({
            counter: state.counter
        });
        // console.log('state',this.state);
    }


    render() {
        return (<div>
            <p>counter works!</p>
            <p>{this.state.counter}</p>
            <div>
                <button className='mx-2 bg-red-500 px-3 py-1 text-white'
                onClick={this.onIncrement} >
                    increment
                </button>
                <button className='bg-red-500 px-3 py-1 text-white'
                onClick={this.onDecrement} >
                    decrement
                </button>
            </div>
        </div>)
    }
}