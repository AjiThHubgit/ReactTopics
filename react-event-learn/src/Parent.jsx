import { useState } from 'react';

const Parent = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        alert('Hello !!');
    }

    const handleIncrement = (getCount, event) => {
        setCount(getCount + 1);
        console.log(event, 'get event details.....');
    }

    return (
        <>
            <button type="button" onClick={handleClick}>Say Hello!!</button>
            <p>COUNT: {count}</p>
            <button type="button" onClick={(e) => handleIncrement(count, e)}>Increment</button>
        </>
    )
}

export default Parent;