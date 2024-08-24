import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"
import { useFetch } from '../hooks/useFetch'
import ProjectStore from '../context/store'

const Home = () => {
    const [state, dispatch] = useContext(ProjectStore)
    const { data } = useFetch("https://dummyjson.com/products")

    const handleAddToCart = (product) => {
        dispatch({type: "ADD_TO_CART",  product})
    }
    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="nav__wrapper">
                        <div className="nav__title">
                            <h1>Home</h1>
                        </div>
                        <div className="nav__links">
                            <NavLink className="nav__link" to={"/login"}>Login</NavLink>
                            <NavLink className="nav__link" to={"/cart"}><h1>Cart {state?.cart_products?.length}</h1></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bb'>
                <div className="container">
                    <div className="b__wrapper">
                    {
                   data && data.map((product) => 

                    <div className='hopi' key={product.id}>
                        <img className='dhjs' src={product.thumbnail} alt="" />
                        <h1 className='hf'>{product.title}</h1>
                        <p className='dhj'>{product.description}</p>
                        <p className='djfm'>{product.price}</p>
                        <button className='que' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                   </div>
                )
                }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home