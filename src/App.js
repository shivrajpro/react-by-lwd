import React from "react";
import './App.css';

export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function handleClick() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p className={highlighted ? 'active' : undefined}>Style me!</p>
            <button className="bg-red-400 text-white px-5" onClick={handleClick}>Toggle style</button>
        </div>
    );
}
