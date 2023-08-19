import React, { useState, useEffect } from 'react';
import './App.css';
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT || 5001;


function App() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:${SERVER_PORT}/api/hello`)
      .then(response => response.json())
      .then(data => setApiMessage(data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React with TypeScript!</h1>
        <p>API response aa: {apiMessage}</p>
      </header>
    </div>
  );
}

export default App;
