import React from 'react'
import "./card.css";

const Card = ({data}) => {
    const mycard = () => {
        return data.map((item, index)=>{
            return(
                (
                    <div key={index} className="cardStr">
                      <img src={item.img} />
                      <p>{item.work}</p>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <button onClick={()=> alert(item.name)} style={{borderRadius: "10px"}}>see more..</button>
                    </div>
                  )
            )
        })
      }

      return (
        <div className="card">
            {mycard()}
        </div>
      )
}

export default Card
