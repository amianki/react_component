import { useState } from "react";

const Counter = (props) => {
    let [count, setCount] = useState(0);
    var limit =  props.limit;
    function increase() {
        
        if (count < limit) {
            count++;
        }

        setCount(count);
    }
    function decrease() {
        if (count > 0) {
            count--;
        }

        setCount(count);
    }
    return (

        <div className="container">

            <button onClick={increase}>+</button>
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;