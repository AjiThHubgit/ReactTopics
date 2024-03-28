import React from 'react';

const AddNumberComponent = ({ a, b }) => {
    const sum = a + b;
    return (
        <div>
            <p>Sum of {a} and {b} is: {sum}</p>
        </div>
    );
};

export default AddNumberComponent;
