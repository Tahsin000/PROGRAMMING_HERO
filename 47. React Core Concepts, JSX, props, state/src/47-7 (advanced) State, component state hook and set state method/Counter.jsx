import React, { useState } from "react";

function Counter (){

    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const dencreaseCount = () => setCount(count - 1);
    return(
        <div className="Counter">
            <h3>Count: {count}</h3>
            <div className="">
                <button onClick={increaseCount}>Increase</button>
                <button onClick={dencreaseCount}>Dencrease</button>
            </div>
        </div>
    );
}
export default Counter;