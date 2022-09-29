import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'http://localhost:3001/'

function App() {
  const [message, setMessage] = useState('no message');

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        console.log(response.data)
        setMessage(response.data.message)
      }).catch(error => {
        setMessage(error)
      })
  }, [])
  return (
    <div>
      <h3>Following message was retrieved from NodeJS Server:</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
