import { useContext } from "react"
import ProjectStore from "../context/store"
import "./Cart.css"
const Cart = () => {
    const [state, dispatch] = useContext(ProjectStore)
    console.log(state);
  return (
    <div className="jkda1">
        <h1 className="h1111">Cart</h1>
        {
                   state?.cart_products && state?.cart_products.map((product) => 

                    <div className="rtrt" key={product.id}>
                        <img className="ehe" style={{width: "100px"}} src={product.thumbnail} alt="" />
                        <h1 className="jqeu5678">{product.title}</h1>
                        <p className="jqaewqu">{product.description}</p>
                        <p className="jqdau">{product.price}</p>
                   </div>
                )
                }
    </div>
  )
}

export default Cart