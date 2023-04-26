import React from 'react';
import "./card.css"

export default function Card({productPic,productName,productDescription,Price,Rating,msg}){

    return(
        <>
            <div className='card'>
                <img src={productPic} />
                <h3>{productName}</h3>
                <p>{productDescription}</p>
                <h4>{Price}</h4>
                <p>{Rating}</p>
                <div className='button'onClick={()=> alert(msg)}>ADD TO CART</div>
            </div>
        </>
    )
}