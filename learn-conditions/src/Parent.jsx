import { useState } from "react";

const Parent = () => {

    // scope handling
    const cars = ['Ford', 'BMW', 'Audi'];

    // state handling
    const [carArr, setCarArr] = useState(cars);

    return (
        <>
            <h1>Conditional Rendering using &&</h1>
            {
                carArr.length > 0 &&
                <div>
                    <p>Condition Satisfied.....</p>
                </div>
            }
        </>
    )
}

export default Parent;