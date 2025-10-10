import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        try {
            const res = await API.post("/auth/login",{email,password});
            localStorage.setItem("token",res.data.accessToken);
            navigate("/dashboard");
        } catch (error){
            alert("Login Failed" + error);
        }
    }

    return (
        <>
        <div className="flex items-center justify-center h-screen">
       <div class=" w-96 p-8 bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 text-white rounded-lg shadow-lg">
       <h2 class="font-bold text-3xl">Welcome Back</h2>
       <p class="mt-2">Sign in to continue</p>
       <form 
       onSubmit={handleLogin}>
        <div>
            <label class="mt-2 block font-medium">Email</label>
            <input 
            class="w-full mt-1 p-2 border rounded-md text-gray-900" 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
          <div class="mt-4">
            <label class="mt-2 block font-medium">Password</label>
            <input 
            class="w-full mt-1 p-2 border rounded-md text-gray-900"
             type="password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             />
        </div>

        <div>
            <a class="text-right block mt-2 text-sm hover:underline">Forgot password</a>
            <button 
            class="w-full bg-slate-800 py-2 rounded-md font-bold mt-6 hover:opacity-80"
            >Sign In</button>
        </div>
       </form>
       <p class="text-center mt-6 text-sm">Don't have an account?
         <a class="text-center hover:underline">Sign up</a>
       </p>
    </div>
    </div>
        </>
    )
}

export default Login;