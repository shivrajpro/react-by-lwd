import './App.css';
import Button from './components/Button/Button';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Post from './components/Posts/Posts';

function App() {
    return (
        <div className='container mx-auto'>
            <Post/>
            {/* <Button name="First Button" />
            <Button name="Second Button" />
            <HelloWorld text="Good Morning" /> */}
        </div>
    );
}

export default App;
