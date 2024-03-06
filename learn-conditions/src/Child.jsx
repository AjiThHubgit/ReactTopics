import react, { useState } from 'react';

const Child = () => {

    const [voteForAge, setVoteForAge] = useState('');

    const handleOnChange = (getNum) => setVoteForAge(getNum);

    return (
        <>
            <h1>Child Component using ternary operator</h1>
            <div>
                <label>Enter your age : </label>
                <input type="text" value={voteForAge} onChange={(e) => handleOnChange(e.target.value)} />
            </div>

            <div>
                {
                    voteForAge > 17 ? `Your age is ${voteForAge} Eligible to vote` : `Your age is ${voteForAge} Not Eligible to vote`
                }
            </div>
        </>
    )
}

export default Child;