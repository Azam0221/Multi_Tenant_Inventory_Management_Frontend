import React, { use, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import  { PublicAPI } from "../services/api";


function Register(){

    const [name,setName] = useState("");
    const [tenantName,setTenantName] = useState("Nike110");

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        try {
            const res = await PublicAPI.post("auth/register-brand",{name, tenantName, email, password});
            localStorage.setItem("token",res.data.accessToken);
            navigate("/dashboard");
            console.log(res.data)
        } catch (error){
            alert("Login Failed" + error.message);
        }
    }

    return (
        <>
        <div className="flex items-center justify-center h-screen">
       <div class=" w-96 p-8 rounded-lg shadow-lg">
       <h2 class="font-bold text-3xl">Create Account</h2>
       <p class="mt-2">Sign up to continue</p>
       <form 
       onSubmit={handleLogin}>

         <div>
            <label class="mt-4 block font-medium">Username</label>
            <input 
            class="w-full mt-1 p-2 border rounded-md text-gray-900" 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
        </div>

        <div className="mt-4">
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
            class="w-full bg-slate-800 py-2 text-white rounded-md font-bold mt-6 hover:opacity-80"
            >Sign Up</button>
        </div>
       </form>
       <p class="text-center mt-6 text-sm">Don't have an account?
          <Link to={"/login"} class="text-center hover:underline">Login</Link>
      </p>
    </div>
    </div>
        </>
    )
}

export default Register;