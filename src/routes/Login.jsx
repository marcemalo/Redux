import { useContext} from "react"
import ProjectStore from "../context/store"
import { NavLink } from "react-router-dom"
import "./Login.css"

const Login = () => {
    const [state, dispatch] = useContext(ProjectStore)
    
    const handleAddToLogin = () => {
        const { email, password, image } = state;
        dispatch({ type: "ADD_TO_USER", email, password, image });
      }
    return (
        <div className="login">
            <h1 className="login__h1">Login</h1>
            <input className="login__input" type="text" placeholder='Email' onChange={(e) => dispatch({ type: "CHANGE_EMAIL", email: e.target.value })} />
            <input className="login__input" type="text" placeholder='Password' onChange={(e) => dispatch({ type: "CHANGE_PASSWORD", password: e.target.value })} />
            <NavLink to={"/profile"}><button onClick={() => handleAddToLogin(state)} className="bb">Create Login</button></NavLink>
        </div>
    )
}

export default Login