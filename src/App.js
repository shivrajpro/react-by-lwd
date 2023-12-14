import React from "react";
import './App.css';

export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function handleClick() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div className='container mx-auto'>
            <h2>app works! lets start</h2>
        </div>
    );
}
