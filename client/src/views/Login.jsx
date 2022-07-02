import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const Login = ({setLoginUser}) => {
const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }

    const login =()=>{
        axios.post("http://localhost:3000/Login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    navigate.push("/")})
    }
    return (
        <>
<div class="">
    <div class="">
        Login To Your Account
    </div>
    <div class="">
        <form action="#" autoComplete="off">
            <div class="">
                <div class="">
                    <span class="">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </span>
                    <input type="text" id="sign-in-email" class="" name="email" value={user.email}  onChange={handleChange} placeholder="Your email"/>
                    </div>
                </div>
                <div class="">
                    <div class=" ">
                        <span class="">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                </path>
                            </svg>
                        </span>
                        <input type="password" id="sign-in-email" class="" name="password" value={user.password}  onChange={handleChange} placeholder="Your password"/>
                        </div>
                    </div>
                    <div class="">
                        <div class="">
                            <a href="#" class="">
                                Forgot Your Password?
                            </a>
                        </div>
                    </div>
                    <div class="">
                        <button type="submit" class=" " onClick={login}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div class="">
                <a href="#" target="_blank" class=""  onClick={navigate.push("/Register")}>
                    <span class="ml-2">
                        You don&#x27;t have an account?
                    </span>
                </a>
            </div>
        </div>

        </>
    )
}
export default Login