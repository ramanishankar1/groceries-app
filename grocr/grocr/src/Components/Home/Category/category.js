import './category.css'
import { useNavigate } from 'react-router-dom';


function Category(props) {
    const navigateTo = useNavigate()
    return (

        <div className="category" onClick={() => {
            navigateTo('/products/' + props.name)

        }}>
            <div className="imgArea">
                <img src={props.img}></img>

            </div>
            <div className="textArea">
                <h4><div className="name"> {props.name}

                </div></h4>
            </div>

        </div>


    )

}

export default Category;