import React from 'react'
import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(1);
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count - 1)}>Decrement</button> 
        <button onClick={() => setCount(count + 1)}>Increment</button> 
        <button onClick={() => setCount(1)}>reset</button>
        </div>
    )
}

export default Counter
