import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const [email , setEmail] = useState()
    const [password,setPassword] = useState()
    const handleSubmit = (e)=>{
         e.preventDefault()
         if(email === "" || password === "" || password.length <8) return;
        navigate('/dashboard')
    }
    return ( 

        <div className="flex items-center min-h-screen justify-center">
            <div className="w-[90%] md:w-[60%] lg:w-[45%] bg-white px-4 py-3 shadow-2xl rounded-2xl">
                <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="Email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email" 
              className="w-full p-3 border-b border-slate-200 focus:border-blue-500 outline-none transition-colors"
            />
            
            <input 
              type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password" 
              className="w-full p-3 border-b border-slate-200 focus:border-blue-500 outline-none transition-colors"
            />
            
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              <span>Login</span>
            </button>
          </form>
            </div>
        </div>
     );
}

export default Login;