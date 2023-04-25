import React from 'react'
import "./shoppingList.css"

const ShoppingList = ({data}) => {

  const myList = () => {
    return data.map((item,index)=>{
        return(
            (
                <div key={index} className='card'>
                    <img src={item.productPic}/>
                    <h3>{item.productName}</h3>
                    <p>{item.productDescription}</p>
                    <h4>{item.Price}</h4>
                    <p>{item.Rating}</p>
                    <div className='button'onClick={()=> alert(item.alert)}>ADD TO CART</div>
                </div>
            )
        )
    })
  }

  return(
    <div className='list'> 
      {myList()}
    </div>
  )
}

export default ShoppingList
