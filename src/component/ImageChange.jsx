import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Image(){
    
    const[image, setImage] = useState('')

    useEffect(()=>{
            const response = axios.get('https://dog.ceo/api/breeds/image/random')
                .then(response => setImage(response.data.message))
                .catch(err => console.error(err))
    },[])

    return(
        <div>
            <img src={image} 
            style ={{width : '130px', height: '150px', margin: '30px'}}
            /><br/><br/>
        </div>
    )
}