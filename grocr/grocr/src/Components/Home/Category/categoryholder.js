import './categoryholder.css'
import Category from './category'
import Vegetables from '../../Assets/Images/Vegetables.jpg'
import Fruits from '../../Assets/Images/Fruits.jpg'
import Beverages from '../../Assets/Images/Beverages.jpg'
import Bakery from '../../Assets/Images/Bakery.jpg'
function Categoryholder() {
    const categories = [
        {
            name: "Vegetables",
            img: Vegetables,
        },
        {
            name: "Fruits",
            img: Fruits,
        },
        {
            name: "Beverages",
            img: Beverages,
        },
        {
            name: "Bakery",
            img: Bakery,
        },
    ]
    return (

        <div className="categoryHolder">
            <div className="container">
                <div className="categoryWrapper">
                    {
                        categories.map((items) => {
                            return <Category key={Math.random()} name={items.name} img={items.img}></Category>
                        })

                    }

                </div>
            </div>

        </div>

    )

}
export default Categoryholder;