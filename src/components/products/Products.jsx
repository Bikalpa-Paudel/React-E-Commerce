import { useState, useEffect } from 'react'
import Product from '../allProduct/AllProduct'
import './Products.css'

export const Products = () => {
    const [productData, setProductData] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=> setProductData(data))
    },[])


   const allProducts = productData.map((data)=>{
     return <Product 
     img={data.image}
     key={data.id}
     description={data.description}
     price={data.price}
     rating={data.rating.rate}
     count = {data.rating.count}
     />
   }
   )        
  return (
    <div className='products'>
        {allProducts}
    </div>
  )
}
