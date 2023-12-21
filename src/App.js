import "./App.css";
import ButtonContext from "./components/Context/ButtonContext";
import Sidebar from "./components/Navigation/Sidebar/Sidebar";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div className="container mx-auto px-2 py-2">
            <div className="w-1/5">
                <ButtonContext.Provider value="from contect" >
                    <Sidebar />
                </ButtonContext.Provider>
                <Sidebar name="lwd" />
            </div>
            <div className="w-4/5">
                <Posts />
            </div>
        </div>
    );
}

export default App;
