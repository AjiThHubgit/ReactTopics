import { useReducer } from 'react';
import './App.css';

//reducer function

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      throw Error("Invalid action")
  }
}

function Counter() {

  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(counterReducer, { count: 0 }); // function, initial state, optional function
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c + 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button> */}

      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

    </div>
  )
}


function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
