import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios.get('http://127.0.0.1:5000').then(res => {
      setData(res.data);
    })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        DATA: {data}
      </header>
    </div>
  );
}

export default App;
