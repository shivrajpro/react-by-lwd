import './App.css';
import Cat from './components/MouseTracker/Cat';
import MouseWithCat from './components/MouseTracker/MouseWithCat';

function App() {
    let userData = {
        name: 'Leela',
        greet: function () {
            return 'Hello ' + this.name;
        },
    };
    return (
        <div className='border border-gray-500 container mx-auto'>
            <Cat />
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
