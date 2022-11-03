import './product.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Cart Folder/cartslice';
import { useSelector } from 'react-redux';

function Product(props) {
    const cartlist = useSelector((state) => state.cartProduct.cartitems)
    const navigate = useNavigate()
    const navigateTo=useNavigate()
    let finalprice = parseInt(props.price - ((props.offer / 100) * props.price))
    // const cartlist=useSelector((state)=>{state.cart.cartslice})

    const dispatch = useDispatch()
    const addtocartHandler = (item) => {
        dispatch(addtocart(item))
        // console.log(dispatch(addtocart(item)));
        console.log(cartlist);
}
 

    return (
        <div className="groceryProducts">
            <div className="imgArea">
                <img src={props.img} alt='products' onClick={() => {
                    navigate('/categorydetails/' + props.category + '/' + props.id)
                }} />

                <div className="textArea">
                    <div>id:{props.id}</div>
                    <div className="name"> Name:{props.name}</div>
                    {/* <div className="price">Price:{props.price}</div> */}
                    <div className="offer">Offer:{props.offer}
                        <div className="Finalprice">Finalprice:{finalprice}</div>
                        <div className="mrpStrikethrough">M.R.P:<s>{props.price}</s></div>
                        <button className='addtocartbtn' onClick={() => {
                            addtocartHandler(props.product)
                            // console.log(addtocartHandler(props.product));
                            navigateTo('/cart')
                        }}>AddtoCart</button>
                    </div>
                </div>
            </div>
        </div>



    )

}
export default Product;
