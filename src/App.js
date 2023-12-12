import './App.css';
import Button from './components/Button/Button';
import HelloWorld from './components/HelloWorld/HelloWorld';

function App() {
    return (
        <div className='container mx-auto'>
            <Button name="First Button" />
            <Button name="Second Button" />
            <HelloWorld text="Good Morning" />
        </div>
    );
}

export default App;
