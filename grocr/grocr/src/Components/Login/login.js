import { useState } from "react";
import{useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {login,logout} from '../redux/loginSlice'
function Login(){
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const navigate=useNavigate()
const isLoggedIn = useSelector((state) => state.loginProduct.isLoggedIn)                                                                                                                                                                    
const dispatch=useDispatch()
const emailHandler=(event)=>{
    setEmail(event.target.value)
}
const passwordHandler=(event)=>{
    setPassword(event.target.value)
}
const validate=(event)=>{
    event.preventDefault()
    if(email.includes('@')&& password.length>4){
        alert("Email is Valid")
        dispatch(login(email,password))
        console.log(dispatch(login()));
    }else{
        alert("Username/Password is invalid")
    }
    setEmail('')
    setPassword('')
}

return(
    <div className="login">
            <div className="loginWrapper">
                {
        !isLoggedIn ? <div className="loginForm">
        <form onSubmit={validate}>
     
        <input type="text" className="uname" onChange={emailHandler}value={email}/>
        <input type="password" className="password" onChange={passwordHandler}value={password}/>
        <input type="submit" className="login" value='Login' onClick={()=>{
            navigate('/cart')
        }}/>
        </form>
        </div>
: <div className="logout" value="logout" onClick={()=>{
    dispatch(logout())
}}>LogOut</div>      
}
        </div>

        </div>
                
    
                

                
)



    
}
export default Login;