import './App.css';
import { useState, useEffect } from 'react';
import LearnAxios from './LearnAxios';

function App() {

  const endPointUrl = "https://jsonplaceholder.typicode.com/users";
  const [resJson, setResJson] = useState([]);

  useEffect(() => {
    fetch(endPointUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResJson(data)
      })
      .catch(error => {
        console.log('error', error);
      })
  }, []);

  return (
    <div className="App">
      {resJson.length > 0 &&
        resJson.map((user, index) => (
          <div key={index}>
            <p>{user.id}</p>
            <p>{user.name}</p>
          </div>
        )
        )}

      <LearnAxios />
    </div>
  );
}

export default App;

// https://www.freecodecamp.org/news/javascript-fetch-api-for-beginners/

// Post

// fetch(url,
//   {
//     method: POST,
//     body: Json.Stringify({
//       name: 'Ajith',
//       email_id: 'ajith123@gmail.com'
//     })
//       .then(res => res.json())
//       .then(data => console.log(data))
//   })