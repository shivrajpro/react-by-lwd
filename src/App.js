import './App.css';
import ButtonContext from './Context/ButtonContext';
import UserContext from './Context/UserContext';
import Posts from './components/Posts/Posts';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    let userData = {
        name:'leela',
        greet:function () {
            return 'hello '+this.name;
        }
    }
    return (
        <div className='container mx-auto'>
            <ButtonContext.Provider value="navigation context value">
                <UserContext.Provider value={userData} >
                    <Sidebar name="leela web dev" />
                </UserContext.Provider>
            </ButtonContext.Provider>
            <Posts />
        </div>
    );
}

export default App;
