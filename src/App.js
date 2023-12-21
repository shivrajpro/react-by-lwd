import './App.css';
import Navigation from './components/Navigation/Navigation';
import Posts from './components/Posts/Posts';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    let userData = {
        name: 'leela',
        greet: function () {
            return 'hello ' + this.name;
        }
    }
    return (
        <div className='container mx-auto'>
            <div className='flex' >
                <div className='w-1/5' >
                    <Sidebar>
                        <Navigation>
                            <div>
                                <a href='#'>leela web dev</a>
                                <p> {userData.greet()} </p>
                            </div>
                        </Navigation>
                    </Sidebar>
                </div>
                <div className='w-4/5' >
                    <Posts />
                </div>
            </div>
        </div>
    );
}

export default App;
