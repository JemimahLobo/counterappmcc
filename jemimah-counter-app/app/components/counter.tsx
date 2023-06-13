import { useState } from "react"


const counter = () => {
    const[count, setCount] = useState(0);

    const incremementCounter = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1 className="componentHeading"> Counter </h1>
            <p className={count > 10 ? "greater-than-ten": ""}  > count Count: {count} </p>
            <button className="fancyButton" onClick={() => incremementCounter}> Increment </button>
            <button className="fancyButton"> Decrement </button>
            <button className="fancyButton"> Reset </button>

        </div>
    )
}

export default counter;
