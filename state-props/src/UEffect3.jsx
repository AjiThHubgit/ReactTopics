import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const UEffect3 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    // Effect to log when component mounts and unmounts
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted'); // The component is removed from the DOM........
        };
    }, []);

    // Function to handle addition
    const handleAddition = () => {
        setSum(num1 + num2);
    };

    return (
        <div>
            <input type="number" value={num1} onChange={e => e.target.value != '' ? setNum1(parseInt(e.target.value)) : setNum1('') } />
            <input type="number" value={num2} onChange={e => e.target.value != '' ? setNum2(parseInt(e.target.value)) : setNum2('') } />
            <button onClick={handleAddition}>Add</button>
            <p>Sum: {sum}</p>
        </div>
    );
};
export default UEffect3;
