import UserInput from './UserInput';

function App() {
  const [firstName, bindFirstName, resetFirstName] = UserInput('')
  const handleSubit = () => {
    console.log({ ...bindFirstName })
    alert('Hello Ajith' + firstName)
    resetFirstName();
  }

  return (
    <div>
      <label>First Name</label>
      <input type="text" {...bindFirstName} />
      <button onClick={handleSubit}>Submit</button>
    </div>
  );
}

export default App;
