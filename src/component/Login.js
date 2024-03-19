import React,{useState,useEffect} from 'react'
import { useNavigate, useLocation  } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { AiTwotoneEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import {  toast } from 'react-toastify';
import {Link} from "react-router-dom";
import { UserContext } from '../context/usercontext';
import { useContext } from 'react';
import { LoginAPI } from '../services/UserService';
import './Login.scss'
function Login() {
    
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isShowPassword, setisShowPassword] = useState(false)
    const [showLoading, setshowLoading] = useState(false)
    const { user } = useContext(UserContext);
    const { loginContext } = useContext(UserContext);
   
    
    useEffect(()=>{
        if(user.auth){
            navigate('/');
        }
    },[])
    const handleShowPassword =  ()=>{
                setisShowPassword(pre => !pre)
    }
    const handleLogin =  async () => {
        setshowLoading(true)
        if(!email || !password ){
            toast.error('Missing email or password')
            return
        }

        let res = await LoginAPI(email,password)
        if(res && res.token){
            if(user.auth){
                return
            } 
            else{
                loginContext(email)
                toast.success('Login successfully')
                navigate('/map')
            }
        }
        else{
            if(res && res.status===400){
                toast.error(res.data.error)
            }
        }
        setshowLoading(false)
    }
  
      return (
        <div className='login-container col-12 col-sm-4'>
            <div className='title'>Login </div>
            <div className='text'>Email</div>
            <input className='inputlogin' type='text' placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <div className='text'>Password</div>
            <div className='input-eye'>
                    <input className='inputlogin w-100' type={isShowPassword ? 'text':'password'} placeholder='Password...'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    {/* <AiTwotoneEyeInvisible className={`eye ${isShowPassword ? 'visually-hidden' : ''}`}
                        onClick={handleShowPassword}
                    />
                    <AiTwotoneEye className={`eye ${isShowPassword ? '' : 'visually-hidden'}`}
                        onClick={handleShowPassword}/> */}
            </div>
            
            <button className={email&&password ? 'btn btn-danger':''}
                    disabled={email&&password ? false : true}
                    
                    onClick={handleLogin}
            >{showLoading && <i className= 'fas fa-spinner fa-spin'></i>}Login</button>
           <div className='register'>
                    <Link to="/register"><p>Register</p></Link>      
           </div>
        </div>
  )
}

export default Login
   
            
    
    
   
   
   
    
    
    