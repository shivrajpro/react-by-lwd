import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() { 
        console.log('## getDerivedStateFromError ##');
        return {hasError:true};
    }

    componentDidCatch() {
        console.log('## componentDidCatch called ##');
     }

    render() {
        if(this.state.hasError) return <div><h1>An error occurred</h1></div>
        return this.props.children;
    }
}