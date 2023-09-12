import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import {AiFillApple} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineAmazon} from "react-icons/ai"
import {authenticateSignup} from "../services/Api"
import "./form.css"

export default function Register({toggleLoginSignup, togglePopup}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();


  const toggleShowPassword = (e) => {
        e.preventDefault()  
        setShowPassword(!showPassword)
    }


  const signupUser = async () => {
    const user = { email, password };
    let response = await authenticateSignup(user);
    console.log(response);
    const signupToken = response.data.token;
    if(signupToken !== undefined){
      localStorage.setItem("token", signupToken);
      localStorage.setItem("email", response.data.user.email);
      togglePopup()
      navigate(-1); // Move the navigation here
    }
    else{
      alert(response.data.message)
    }
  };

  // const signupUser =(e)=>{
  //   e.preventDefault();
  //   console.log("hello");
  //   axios.post('http://localhost:8080/api/register', {email, password}) // Replace with the actual API endpoint
  //   .then((response) => {
  //     // Handle the response data if needed
  //     console.log('Data sent successfully:', response);
  //   })
  //   .catch((error) => {
  //     // Handle errors here
  //     console.error('Error sending data:', error);
  //   });
  // }

  return (
    <>
      <div className='form'>
      <h2 className='form-heading'>CREATE AN ACCOUNT</h2>
      <main className='register-body'>
        <p>Save recipes across devices, write reviews, and share your own photos</p>
        <label htmlFor="email">EMAIL</label><br/>
        <input type='email' name='email' id='email' placeholder='your@email.com'  onChange={(e) => { setEmail(e.target.value) }}  required/><br/>

        <label htmlFor="pwd">PASSWORD</label><br/>
        <input type={showPassword ? 'text' : 'password'} placeholder='Password' id='pwd' onChange={(e) => { setPassword(e.target.value) }} required /><br />
        <button onClick={toggleShowPassword} id='show-hide-login-page'>{showPassword ? "HIDE" : "SHOW"}</button>

        {/* <input type='checkbox'></input>
        <div id='agreement-clause'>
            <p>I agree to the <Link to='https://corporate.discovery.com/visitor-agreement/' target='_blank'>Visitor Agreement</Link> and <br />have read the <Link to='https://corporate.discovery.com/privacy-policy/' target='_blank'>Privacy Notice</Link>.<br /> I understand Discovery and its <Link to='https://corporate.discovery.com/businesses-and-brands/' target='_blank'>affiliates</Link> <br /> may use my email address to send <br /> updates, ads, and offers. <br /> Learn more <Link to='https://corporate.discovery.com/privacy-policy/' target='_blank'>here</Link></p><br />
        </div> */}
        <div style={{display:"flex", flexDirection:"column", justifyContent:'center', alignItems:"center",gap:"8px"}}>
          <button id="loginBtn" onClick={signupUser}>CREATE ACCOUNT</button>
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
      <div className='footer-register'>
         Already a member?<span className='form-links'  onClick={toggleLoginSignup}>Log In</span>
      </div>

      </div>
    </>
  )
}
