import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import {AiFillApple} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineAmazon} from "react-icons/ai"
import {authenticateLogin} from "../services/Api"
import "./form.css"

export default function Login({ toggleLoginSignup, togglePopup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = (e) => {
      e.preventDefault()
      setShowPassword(!showPassword)
  }



  const loginUser = async () => {
    const user= {email, password};
    let response = await authenticateLogin(user);
    console.log(response);

    if (response && response.data && response.data.token) {
      // Handle successful login
   
    const loginToken = response.data.token;
    if (loginToken !== undefined) {
      localStorage.setItem("token", loginToken);
      localStorage.setItem("email", response.data.user.email);
      console.log(response.data.user.email,"name");
      togglePopup()
        navigate(-1); // Move the navigation here
      }

    }
     else{
      console.log('Unexpected response from login API:', response);
      alert(response.data.message)
    }
  };

  return (
    <>
      <div className='form'>
      <h2 className='form-heading'>LOG IN</h2>
      <main>
        <label htmlFor="email">EMAIL</label><br/>
        <input type='email' name='email' id='email' placeholder='your@email.com' onChange={(e) => { setEmail(e.target.value) }} required/><br/>

         <label htmlFor="pwd">PASSWORD</label><br/>
        <input type={showPassword ? 'text' : 'password'} placeholder='Password' id='pwd' onChange={(e) => { setPassword(e.target.value) }} required /><br />
        <button onClick={toggleShowPassword} id='show-hide-login-page'>{showPassword ? "HIDE" : "SHOW"}</button>

        <div style={{display:"flex", flexDirection:"column", justifyContent:'center', alignItems:"center", gap:"8px"}}>
          <button id="loginBtn" onClick={loginUser}>LOG IN</button>
          <button style={{textAlign:"center", fontSize:"0.9rem", color:"#0F8BEA"}}>Forgot Password?</button>
        </div>


        <div style={{padding:"1rem",display:"flex", flexDirection:"column", justifyContent:'center', alignItems:"center"}}>
          <div style={{fontSize:"0.9rem"}}>OR CONTINUE WITH</div>
          <ul type='none' style={{display:"flex", justifyContent:"space-between", padding:0, gap:"5px"}}>
            <li className='icons' style={{background:"black", color:"white"}}><AiFillApple fontSize="2.1rem" /></li>
            <li className='icons' style={{background:"white"}}><FcGoogle fontSize="2.1rem" /></li>
            <li className='icons' style={{background:"#0F8BEA", color:"white"}}><BsFacebook fontSize="2.1rem" /></li>
            <li className='icons' style={{background:"white"}}><AiOutlineAmazon fontSize="2.1rem" /></li>
          </ul>
        </div>
      </main>
      <div className='footer'>
      Don't have an account yet?<span className='form-links'  onClick={toggleLoginSignup}> Sign Up</span>
      </div>

      </div>
    </>
  )
}
