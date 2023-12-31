import React from 'react'
import { toast } from 'react-hot-toast';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";



const Home = () => {

const ProductList = [
  {name:'Mac Book' , price:120000,imgsrc:img1, id:'sjhgueirhgtr' },
  {name:'Joomyy Choo' , price:1000000,imgsrc:img2, id:'dwsrg' }
]

const addToCartHandler = (option) => {
  console.log(option);
  toast.success('Added To Cart');
}




  return  <div className='home'>
   {ProductList.map((i)=>(
    <ProductCard key={i.id} imgsrc={i.imgsrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler} />
   ))}
  </div>
    
}




const ProductCard = ({name,id,price,handler,imgsrc}) => (
  <div className='productCard'>
      <img src={imgsrc} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={()=>handler({name,price,id,quintity:1,imgsrc})}>Add To Cart</button>
  </div>

)

export default Home