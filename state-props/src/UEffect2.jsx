import { useState, useEffect } from 'react';
const UEffect2 = () => {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(count);

    useEffect(() => {

        setCalculation(count * 2);
    }, [count]);

    return (
        <>
            <div>
                <p>{count} count</p>
                <button onClick={() => setCount(count + 1)} type='button'>+</button>
                <p>{calculation} calculation</p>
            </div>
        </>
    )
}

export default UEffect2;