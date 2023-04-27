import React, { useState } from 'react'
import { Fragment } from 'react'

export default function GuessNumber(){

    const[number, setNumber] = useState(0)
    const[count, setCount] = useState(0)

    function handleChange(e){
        setNumber(e.target.value)
    }


    function handleClick(e){
        e.preventDefault();

        setCount(count+1)

        const luckyNumber = 16
        if(luckyNumber>number){
            alert('you guessed a smaller number')
        }
        if(luckyNumber<number){
            alert('you guessed a bigger number')
        }
        if(luckyNumber == number){
            alert(`congratulations you guessed the right number in ${count+1} attempts`)
        }

    } 

    return(
        <Fragment>
            <input 
            type = "number" placeholder='Guess lucky number ...' onChange={handleChange}/>
            <button onClick={handleClick}>Match Number</button>
        </Fragment>
    )
}