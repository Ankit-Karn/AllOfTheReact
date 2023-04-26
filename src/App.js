import './App.css';
import React from 'react';
import Card from './component/card';
import { Card1 } from './component/all3Cards';
import { Card2 } from './component/all3Cards';
import { Card3 } from './component/all3Cards';

function App() {
  return (
    <div className="App">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default App;
