
import './App.css';
import ShoppingList from './component/shoppingList';
import React from 'react'

let data = [
  {
    productId : '1',
    productPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaypk-TMAh2sUk7SpDmExmFp0ButEc2b08A&usqp=CAU',
    productName : 'Shoes',
    Brand : 'Adidas',
    productDescription : 'Adidas Shoes',
    Price : 'Rs. 4000',
    Rating : 'rating~4',
    alert : 'Product of is  1 , which is Shoes of brand Adidas has of rupees 4000 is added in the cart , please proceed to pay !!!'
 },
 {
  productId : '2',
  productPic : 'https://rukminim1.flixcart.com/image/850/850/l44hyfk0/watch/5/5/h/men101-brown-black-rishtey-boys-original-imagf3b9azfxmdna.jpeg?q=90',
  productName : 'Watch',
  Brand : 'Fossil',
  productDescription : 'Fossil watch',
  Price : 'RS. 14000',
  Rating : 'rating~4',
  alert : 'Product of is  2 , which is watch of brand Fossil has of rupees 14000 is added in the cart , please proceed to pay !!!'
},
{
  productId : '3',
  productPic : 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-shoes-6PHWTT.png',
  productName : 'Nike Air-Jordan',
  Brand : 'Nike',
  productDescription : 'Nike Air jordan retro 1',
  Price : 'Rs. 12000',
  Rating : 'rating~4',
  alert : 'Product of is  3 , which is Shoes of brand Nike has of rupees 12000 is added in the cart , please proceed to pay !!!'
},
{
  productId : '4',
  productPic : 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F89%2Fb1%2F89b1e7817f344047b47ddcc69d869ba93a10480a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_multipacks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
  productName : 'Tshirt',
  Brand : 'H&M',
  productDescription : 'An oversized tshirt',
  Price : 'Rs. 1500',
  Rating : 'rating~4',
  alert : 'Product of is  4 , which is Tshirt of brand H&M has of rupees 1500 is added in the cart , please proceed to pay !!!'
},
{
  productId : '5',
  productPic : 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F63%2Fbb%2F63bba9106b6d333ec5f04e4e1874a34639369a1f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_slim_all%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
  productName : 'Trousers',
  Brand : 'H&M',
  productDescription : 'Black cotton trouser',
  Price : 'Rs. 1699',
  Rating : 'rating~4',
  alert : 'Product of is  5 , which is Trouser of brand H&M has of rupees 1699 is added in the cart , please proceed to pay !!!'
}
]

function App() {
  return (
    <div className="App">
      <ShoppingList data={data}/>
    </div>
  );
}

export default App;
