import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";


const Register = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
        
    })
    const navigate= useNavigate()
    const handleSubmit=(e) =>{
        setUser({...user, [e.target.name]: e.target.value})
        e.preventDefault()
        axios.post(`http://localhost:8000/api/user`, user)
        .then(()=>navigate('/'))
        .catch(err=> {
            console.log(err.response.data.errors)
            const errArr=[]
            const errObject = err.response.data.errors
            for (const errKey in errObject){
                errArr.push(errObject[errKey]["message"])
            }
            setErrors(setArr)
        })
        
    }

    return(
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input  value={user.firstName} onChange={(e) => setUser(e.target.value)} type="text" placeholder="First Name" ></input>
                <input value={user.lastName} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Last Name" ></input>
                <input value={user.email} onChange={(e) => setUser(e.target.value)} type="email" placeholder="Email"></input>
                <input value={user.password} onChange={(e) => setUser(e.target.value)} type="password" placeholder="Password"></input>
                <button type="submit">Register</button>
            </form>
        </div>
    )

}

export default Register