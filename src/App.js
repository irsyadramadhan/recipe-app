import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:4000'

function App() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + '/category').then((res) => {
      console.log(res.data.results);
      setData(res.data.results);
    })
  }, [number]);

  return (
    <div className="App">
      <header className="App-header">
          Learn React
          <br />
          {data.map((item, index) => (
            <li key={item.id}>{item.id} - {item.name}</li>
          ))}
          <br />
          {number}
          <br />
          <button onClick={() => setNumber(number + 1)}>Add Number</button>
          <button onClick={() => setNumber(number - 1)}>Subtract Number</button>
      </header>
    </div>
  );
}

export default App;
