import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const HomeNav = () => {
    const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const links = ["Dashboard", "Doctors", "Articles","CheckUp", "ContactUs"];

  return (
    <nav className="fixed top-0 z-999 w-full">
      <div className="mx-auto py-4 px-6 flex items-center justify-between
                      backdrop-blur-xl bg-white/30 border border-white/20 shadow-lg rounded-b-2xl">
    
        <div className="flex gap-2 items-center cursor-pointer" onClick={()=>navigate("/")}>
          <div className="bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl shadow-md">
            S
          </div>
          <h2 className="text-[19px] font-bold text-gray-900" >
            Swasthya<span className="text-orange-500 text-[18px]">Setu</span>
          </h2>
        </div>

      
       <div className="lg:flex hidden  lg:items-center gap-4">
       <div className="hidden lg:flex lg:gap-6">
        {links.map((link) => (
  <NavLink
    key={link}
    className={`
      text-gray-900 text-[18px] font-semibold relative cursor-pointer transition-all duration-300
      ${link === "ContactUs" 
        ? "border border-teal-400 px-4 py-1 rounded-full hover:bg-teal-500 hover:text-white" 
        : "hover:text-teal-500 after:content-[''] after:block after:w-0 after:h-0.5 after:transition-all after:duration-200 after:bg-teal-500 after:absolute after:left-0 after:bottom-0 hover:after:w-full"} 
    `}
 to={`/${link.toLowerCase()}`} 
  >
    {link}
  </NavLink>
))}

        </div>
        <div className="flex gap-2 items-center ">
        <div className="flex bg-teal-400 p-2 w-9 h-9 items-center justify-center text-white text-[15px] rounded-full">HK</div>
        <h2 className="text-[15px] font-semibold truncate ">Harshit Khanal</h2>
        </div>
       </div>

        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>


      {open && (
        <div className="lg:hidden bg-white/30 backdrop-blur-xl border-t border-white/20 shadow-md flex flex-col items-center py-4 space-y-4 rounded-b-2xl">
          {links.map((link) => (
            <h2
              key={link}
              className={` text-[18px] font-semibold ${link == "ContactUs" ? " border border-blue-400 px-3 w-full text-center py-1  bg-teal-400 text-white":"hover:text-teal-500 text-gray-900"} cursor-pointer transition-colors duration-300`}

            >
              {link}
            </h2>
          ))}
        </div>
      )}
    </nav>
  );
};

export default HomeNav;
