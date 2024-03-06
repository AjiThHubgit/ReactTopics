import './App.css';
import react, { useState } from 'react';

function App() {

  const [inputs, setInputs] = useState({});

  const handleOnchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('resultObj', inputs);
  }

  return (
    <div className="App">
      <h1>Learn Forms</h1>

      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Enter User Name : </label>
          <input
            type="text"
            name='user_name'
            value={inputs.user_name || ""}
            onChange={(e) => handleOnchange(e)}
          />
        </div>
        <div>
          <label>Enter User Age : </label>
          <input
            type="text"
            name='user_age'
            value={inputs.user_age || ""}
            onChange={(e) => handleOnchange(e)}
          />
        </div>

        <input type="submit" />
      </form>

    </div>
  );
}

export default App;