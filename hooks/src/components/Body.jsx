// step 1
import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../App';

export default function Body() {
  // step two
  const user = useContext(UserContext);
  console.log(user, 'user');

  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  const incrementRefCounter = () => {
    counterRef.current += 1;
  };

  return (
    <div className='container-full'>
      <p>Body {user.name}</p>
      <div>
        <div>
          <p>{counter}</p>
          <button type='button' onClick={() => setCounter(counter + 1)}>Increment useState </button>
        </div>

        <div>
          <p>{counterRef.current}</p>
          <button type='button' onClick={() => incrementRefCounter(counterRef.current + 1)}>Increment Ref</button>

        </div>
      </div>
    </div>
  )
}
