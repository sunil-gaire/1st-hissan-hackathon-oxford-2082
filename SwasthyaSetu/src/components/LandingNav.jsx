import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LandingNav() {
    const navigate = useNavigate()
    return ( 
        <nav className="fixed top-0 bg-white/30 backdrop-blur-md w-full shadow-xl border border-gray-200">
            <div className="mx-auto py-4 px-2 flex items-center justify-between">
<div className="flex gap-2 items-center cursor-pointer" onClick={()=>navigate('/')}>
<div className="bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl  shadow-md">S</div>
<h2 className="text-[19px] font-bold">Swasthya<span className="text-orange-500 text-[18px]">Setu</span></h2>
</div>

<div className="">
    <button
    onClick={()=>navigate("/login")} className="bg-teal-500 shadow-2xl rounded-full text-center px-3 py-2 text-white  transition-all duration-200 hover:bg-teal-700">
        Get Started
    </button>
</div>

            </div>
        </nav>
     );
}

export default LandingNav;