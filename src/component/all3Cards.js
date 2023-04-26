import Card from "./card";
import React from "react";

export function Card1(){
    return (
        <Card
            productId='1'
            productPic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaypk-TMAh2sUk7SpDmExmFp0ButEc2b08A&usqp=CAU'
            productName='Shoes'
            Brand='Adidas'
            productDescription='Adidas Shoes'
            Price='Rs. 4000'
            Rating='rating~4'
            msg='Product of is  1 , which is Shoes of brand Adidas has of rupees 4000 is added in the cart , please proceed to pay !!!'
        />
    )
}

export function Card2(){
    return (
        <Card
            productId='2'
            productPic='https://rukminim1.flixcart.com/image/850/850/l44hyfk0/watch/5/5/h/men101-brown-black-rishtey-boys-original-imagf3b9azfxmdna.jpeg?q=90'
            productName='Watch'
            Brand='Fossil'
            productDescription='Fossil watch'
            Price='RS. 14000'
            Rating='rating~4'
            msg='Product of is  2 , which is watch of brand Fossil has of rupees 14000 is added in the cart , please proceed to pay !!!'
        />
    )
}

export function Card3(){
    return (
        <Card
            productId='3'
            productPic='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-shoes-6PHWTT.png'
            productName='Nike Air-Jordan'
            Brand='Nike'
            productDescription='Nike Air jordan retro 1'
            Price='Rs. 12000'
            Rating='rating~4'
            msg='Product of is  3 , which is Shoes of brand Nike has of rupees 12000 is added in the cart , please proceed to pay !!!'
        />
    )
}
