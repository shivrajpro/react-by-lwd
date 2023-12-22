import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ParentForwardingRef from './components/ForwardingRef/ParentForwardingRef';
import Posts from './components/Posts/Posts';
import Sidebar from './components/Sidebar/Sidebar';
import ButtonContext from './Context/ButtonContext';
import UserContext from './Context/UserContext';

function App() {
    let userData = {
        name: 'Leela',
        greet: function () {
            return 'Hello ' + this.name;
        },
    };
    return (
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='w-1/5'>
                    <ErrorBoundary>
                        <ButtonContext.Provider value='Leela Web Dev'>
                            <UserContext.Provider value={userData}>
                                <Sidebar />
                            </UserContext.Provider>
                        </ButtonContext.Provider>
                    </ErrorBoundary>
                </div>
                <div className='w-4/5'>
                    <div>
                        <ParentForwardingRef/>
                        {/* <CallbackRefTextInput/> */}
                        {/* <ParentRefTextInput/> */}
                        {/* <RefTextInput/> */}
                        {/* <Category name="some category name" /> */}
                    </div>
                    <div>
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
