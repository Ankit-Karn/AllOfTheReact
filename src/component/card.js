import React,{useState} from'react';
import "./card.css"

export default function Card() {

    const [Data, setData] = useState([])

    async function UserInfo() {
        try {

            const data = await fetch(' https://reqres.in/api/users/')
            const UpdatedData = await data.json();
            setData(UpdatedData.data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='one'>
            <button onClick={UserInfo}>Get user</button>
            {Data.map((item)=>(
                <div key={item.id} className='two'>
                <img src={item.avatar} />
                <p className='id'>id : {item.id}</p>
                <h3>name : {item.first_name} {item.last_name}</h3>
                <p className='email'>email : {item.email}</p>
            </div>
            ) )}  
        </div>
    )
}