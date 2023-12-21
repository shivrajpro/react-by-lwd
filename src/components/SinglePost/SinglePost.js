import { Component } from 'react';

class SinglePost extends Component {
    constructor(props){
        super(props);
        console.log('SinglePost.js constructor called');
    }
    /* 
    static getDerivedStateFromProps(){
        // after constructor
        console.log('SinglePost.js getDerivedStateFromProps called');
    }
     */
    componentDidMount(){
        // last phase in mounting
        console.log('SinglePost.js componentDidMount called');
    }
    
    shouldComponentUpdate(nextProps, nextState){
        //will decide whether to re render the component or not
        console.log('SinglePost.js shouldComponentUpdate called');
        return true;//re-render
        // return false; //dont re-render
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        // after re-render. rare case (scrolling)
        console.log('SinglePost.js getSnapshotBeforeUpdate called');
        return 10;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // last phase in update
        console.log('SinglePost.js snapshot called. snapshot',snapshot);
    }

    render() {
        // after getDerivedStateFromProps
        console.log('SinglePost.js render called');

        return (
            <div className='m-4 p-3 border border-gray-400 shadow'>
                <h3 className='text-xl font-bold text-blue-600'>
                    {this.props.title}
                </h3>
                <div>{this.props.description}</div>
                <div> {this.props.children} </div>
            </div>
        );
    }

    componentWillUnmount(){
        // whenever the component is deleted. (hide posts)
        console.log('[posts.js] component unmount called');
    }
}

export default SinglePost;