import { useState } from 'react';

const UState = () => {

    const [userName, setUserName] = useState('Ajith');
    // const [count, setCount] = useState(0);
    console.log('re-render');
    const handleFunction = () => {
        setUserName('Ajith Dharmalingam');
        // setCount(count + 1);
    }
    return (
        <>
            <p>{userName}</p>
            {/* <p>{count}</p> */}
            <button onClick={handleFunction}>Update State</button>
        </>
    )
}

export default UState;