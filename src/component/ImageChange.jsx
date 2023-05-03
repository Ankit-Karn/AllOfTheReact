import React, { useEffect, useState } from 'react'

export default function Image(){
    
    const[image, setImage] = useState('')

    useEffect(()=>{
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => setImage(data.message))
    },[])

    return(
        <div>
            <img src={image} 
            style ={{width : '130px', height: '150px', margin: '30px'}}
            /><br/><br/>
        </div>
    )
}