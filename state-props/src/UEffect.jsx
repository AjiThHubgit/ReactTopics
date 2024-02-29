// Example 1

import { useState, useEffect } from 'react';

const UEffect = () => {
    const [userName, setUserName] = useState('Ajith');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(userName, 'user_name');
    }, [userName]); // when state update this useEffect is re-render...
    console.log(count);
    console.log(userName); // Initial value...
    return (
        <>
            <p>{userName}</p>
            <p>{count}</p>
            <button onClick={() => setUserName('Ajith Dharmalingam')}>Update State</button>
            <button onClick={() => setCount(count + 1)}>Update count</button>

        </>
    )
}

export default UEffect;