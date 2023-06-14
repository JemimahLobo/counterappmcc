import { useState } from "react"


const counter = () => {
    
    const IncremementCounter = () => {
        setCount(count + 1);
    };
<<<<<<< HEAD
    
    const DecrementCounter = () => {
=======
     const DecrementCounter = () => {
>>>>>>> e269ecd8d2145cdc2f1f229e02258d482dcff95e
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
<<<<<<< HEAD
            <button className="fancyButton" onClick={() => IncremementCounter()}> Increment </button>
            <button className="fancyButton" onClick={() => DecrementCounter()}>Decrement </button>
            <button className="fancyButton" onClick={() => ResetCounter()}>Reset </button>
=======
            <button className="fancyButton" onClick={() => incremementCounter}> Increment </button>
            <button className="fancyButton"> Decrement </button>
            <button className="fancyButton"> Reset </button>
>>>>>>> e269ecd8d2145cdc2f1f229e02258d482dcff95e

        </div>
    );
};

export default counter;
