import Login from "../../../../Login/login";
function Cartitem({items}){
const finalprice=parseInt(items.price-((items.offer/100)*items.price))
console.log(finalprice);
    return(
       
       <div className="cartitem">
            <div className="cartImageArea">
            <img src={items.img} alt="product"></img>
        <div className="cartDetailsArea">
           <div className="name">{items.name}</div>     
           <div className="price">{items.price}</div> 
           <div className="finalprice">{finalprice}</div> 

           <div className="offer">{items.offer}</div> 
           <div className="mrp"><s>{items.price}</s></div> 
            
            
            
            
            
             </div>

            </div>
        </div>


    )
}
export default Cartitem;