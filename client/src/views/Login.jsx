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
}
export default Login