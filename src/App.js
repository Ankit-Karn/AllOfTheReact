import './App.css';
import { Fragment } from 'react';
import Invitation from './component/invitation';
import React from 'react'

const props = {
    subject : "Birthday Party Invitation",
    email : "jaGdish@gmail.com",
    invitee : "jaGdish",
    purpose : "birthday party",
    venue : "Green field Avenue",
    inviter : "JaGdish",
    guest1 : "Ritu",
    guest2 : "Saurabh",
    guest3 : "Kartik"
}

function App() {
   return (
    <Invitation {...props}/>
  );
}

export default App;
