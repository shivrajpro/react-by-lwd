import './App.css';
import ButtonContext from './Context/ButtonContext';
import Posts from './components/Posts/Posts';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div className='container mx-auto'>
            <ButtonContext.Provider value="from context" >
                <Sidebar name="leela web dev" />
            </ButtonContext.Provider>
            <Posts />
        </div>
    );
}

export default App;
