import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Description() {

    const params = useParams()
    const [product, setProduct] = useState({})
    let finalprice = parseInt(product.price - ((product.offer / 100) * product.price))
    console.log(finalprice)

    useEffect(() => {
        fetch('https://63331d6c573c03ab0b586b66.mockapi.io/' + params.category + '/' + params.id).then((response) => {
            if (response.ok) {
                return response.json();
            } else
                return false
        }).then((data) => {
            setProduct(data)
        })

    }, [params.id])


    return (

        <div className="categoryItem">
            <div className="container">
                <div className="categoryDescription">
                    <div className='imgArea'>
                        <img src={product.img} alt="product"></img>
                        <div className='textArea'>
                            <div className='name'>Name:{product.name}</div>
                            <div className='finalprice'>Finalprice:{finalprice}</div>
                            <div className='offer'>Offer:{product.offer}</div>
                            <div className="mrpStrikethrough">M.R.P:<s>{product.price}</s></div>

                        </div>
                    </div>
                </div>

            </div>

        </div>


    )

}
export default Description;