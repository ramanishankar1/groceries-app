import './productholder.css'
import { useEffect, useState } from "react"
import Product from "./product"
import {useParams}from 'react-router-dom'
import { useSelector } from 'react-redux'
function ProductHolder() {
const params=useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://63331d6c573c03ab0b586b66.mockapi.io/'+params.category).then((response) => {
            if (response.ok) {
                return response.json()
            } else      
                return false
        }).then((data) => {
           if(data){
            data.forEach((item)=>{
                item.category=params.category;
                // console.log(item.FinalPrice);
            })  
            setProducts([...data])
           }     

            
        })
        
            


        }, [params])


    return (    

        <div className="Product-Holder">
            <div className="container">
                <div className="productWrapper">
                    {
                        products.map((product) => {


                            return <Product key={Math.random()} id={product.id} name={product.name}  price={product.price} offer={product.offer} img={product.img} finalprice={product.finalprice} category={product.category} > </Product>

                        })

                    }
                </div>

            </div>

        </div>

    )



}
export default ProductHolder;