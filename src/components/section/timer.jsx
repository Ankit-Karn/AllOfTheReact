import React, { useEffect, useState } from 'react'

const Timer = ({handleSubmit}) => {
  const[timer, setTimer] = useState(150);
  
  var time;

  useEffect(()=>{
    const time = setInterval(()=>{
      setTimer(prevTime => prevTime - 1)
    },1000);

    if(timer === 0){
      clearInterval(time);
      handleSubmit();
    }

    return () => clearInterval(time);

  }, [timer])
  
  return (
    <div>
      <h2> Timer: {Math.floor(timer/60)} : {timer%60} </h2>
    </div>
  )
}

export default Timer
