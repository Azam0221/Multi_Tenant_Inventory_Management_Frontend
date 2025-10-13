import React, { use, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import API from "../services/api";


function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e) =>{
        e.preventDefault();
        try {
            const res = await API.post("auth/login",{email,password});
            localStorage.setItem("token",res.data.accessToken);
            navigate("/dashboard");
            console.log(res)
        } catch (error){
            alert("Login Failed" + error);
        }
    }

    return (
        <>
        <div className="flex items-center justify-center h-screen">
       <div className=" w-96 p-8  rounded-lg shadow-lg">
       <h2 className="font-bold text-3xl">Welcome Back</h2>
       <p className="mt-2">Sign in to continue</p>
       <form 
       onSubmit={handleLogin}>
        <div>
            <label className="mt-2 block font-medium">Email</label>
            <input 
            className="w-full mt-1 p-2 border rounded-md text-gray-900" 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
          <div className="mt-4">
            <label className="mt-2 block font-medium">Password</label>
            <input 
            className="w-full mt-1 p-2 border rounded-md text-gray-900"
             type="password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             />
        </div>

        <div>
            <a className="text-right block mt-2 text-sm hover:underline">Forgot password</a>
            <button 
            className="w-full bg-slate-800 py-2 text-white rounded-md font-bold mt-6 hover:opacity-80"
            >Sign In</button>
        </div>
       </form>
       <p className="text-center mt-6 text-sm">Don't have an account?
         <Link to={"/register"} class="text-center hover:underline">Sign up</Link>
       </p>
    </div>
    </div>
        </>
    )
}

export default Login;