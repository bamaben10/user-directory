import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/tasks/Card';
import Button from './components/tasks/Button';
import './App.css';


function App() {
  const [input, setInput] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <div>
      <Card input={input}></Card>
      <Button input={input} setInput={setInput}></Button>
      </div>
    </div>
  );
}

export default App;
