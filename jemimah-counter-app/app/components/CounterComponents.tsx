import { useState } from "react"


const Counter = () => {
    
    const IncremementCounter = () => {
        setCount(count + 1);
    };
    
    const DecrementCounter = () => {
        setCount(count - 1);
        
    };
    const ResetCounter = () => {
        setCount(0)
    };

    const[count, setCount] = useState(0);
    return (
        
        <div>
            <h1 className="componentHeading"> Counter </h1>
            <p className={count > 10 ? "greater-than-ten": ""}  > count Count: {count} </p>
            <button className="fancyButton" onClick={() => IncremementCounter()}> Increment </button>
            <button className="fancyButton" onClick={() => DecrementCounter()}>Decrement </button>
            <button className="fancyButton" onClick={() => ResetCounter()}>Reset </button>

        </div>
    );
};

export default Counter;
