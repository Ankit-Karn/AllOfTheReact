import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ClickCount from './component/clickCount';
import Input from './component/inputFetch';

function App() {

  return(
    <>
    <ClickCount />
    <Input />
    </>
  )
}

export default App;
