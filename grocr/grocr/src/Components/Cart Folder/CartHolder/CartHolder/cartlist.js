import './cartlist.css'
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";s
import Cartitem from "./Cartitem/cartitem";
function Cartlist(){

    const cartlist=useSelector((state)=>state.cartProduct.cartitems)
    // const dispatch=useDispatch()
return(
    <div className="cartHolder"> 
    <div className="cartContainer">
        <div className="cartWrapper">
        {
            cartlist.map((items) =>{
             return  <Cartitem  key={Math.random()} items={items} ></Cartitem> 
            })
        }    
         
    </div>
    </div>
    </div>



)
    






}
export default Cartlist;
