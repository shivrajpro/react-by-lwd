import './App.css';
import Cat from './components/MouseTracker/Cat';
import UserPropTypes from './components/UserPropTypes/UserPropTypes';

function App() {
    let userData = {
        name: 'Leela',
        greet: function () {
            return 'Hello ' + this.name;
        },
    };
    return (
        <div className='p-2 border border-gray-500 container mx-auto'>
            <UserPropTypes/>
        </div>
/* 
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
                        <TableFragment/>
                        <ParentForwardingRef/>

                        <CallbackRefTextInput/>
                        <ParentRefTextInput/>
                        <RefTextInput/>
                        <Category name="some category name" />
                    
                    </div>
                    <div>
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
      */   
    );
}

export default App;
