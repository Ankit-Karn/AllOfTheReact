import React, { useState } from 'react';

 function ClickCount() {

    const[count, setCount] = useState(0)

    function incrementFunc(){
        setCount(prevCount => prevCount + 1)

    }

    function decrementFunc(){
        if(count>0){
          setCount(prevCount => prevCount - 1)
        }
    }

  return (
    <div style={{border: "1px solid black", width:"250px", height:"50px", padding:"80px", margin:"20px", background:"purple"}}>
      <button onClick={decrementFunc} 
      style={{width: "100px", height: "30px", background:"grey"}}
      >-</button>

      <span style={{margin: "10px"}}>{count}</span>
      
      <button onClick={incrementFunc}
      style={{width: "100px", height: "30px", background:"grey"}}
      >+</button>
    </div>
  )
}

export default ClickCount
