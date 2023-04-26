import React,{ useState } from 'react'


export default function Input() {

  const[name, setName] = useState('***');
  const[val, setVal] = useState('')

  function handleChange(event){
    setVal(event.target.value)
  }
  function handleClick(event){
    setName(val)
    setVal('')
  }

  return (
    <div className='div'>
      <input
      style={{marginLeft: "100px", marginTop: "50px"}}
      type="text" placeholder='Add your name' onChange={handleChange}/> 
      <button onClick={handleClick}>submit</button>
      <p style={{marginLeft: "135px"}}>Hi, my name is : {name}</p>
    </div>
  )
}


