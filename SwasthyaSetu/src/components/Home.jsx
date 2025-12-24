import { useNavigate } from "react-router-dom";
import HomeNav from "./HomeNav";

function HomePage() {
    const navigate = useNavigate()
    return ( 
        <div className="bg-slate-200 min-h-screen">
            <HomeNav />
            
        </div>
     );
}

export default HomePage;