import { useNavigate } from "react-router-dom";
import HomeNav from "./HomeNav";
import { Stethoscope, Heart, Activity, FileText, Droplet, GlassWater, Footprints, Bike, Flower, Bed, Hospital } from "lucide-react";

const Dashboard = () => {
    const navigate = useNavigate()
  const stats = [
    { id: 1, title: "Symptom Checks ",
     value: 12, 
     icon: <Stethoscope className="w-6 h-6 text-teal-500" /> },
    { id: 2, title: "Water Intake", value: "1.4 L", icon: <GlassWater className="w-8 h-8 text-blue-500" /> },
    { id: 3, title: "Appointments", value: 7, icon: <Activity className="w-8 h-8 text-orange-500" /> },
    { id: 4, title: "Sleep", value: "5.3 hr", icon: <Bed className="w-8 h-8 text-pink-500" /> },
    { id: 5, title: "Yoga", value: "23 min", icon: <Flower className="w-8 h-8 text-yellow-500" /> },
    { id: 6, title: "Cycling", value: "13 min", icon: <Bike className="w-8 h-8 text-lime-600" /> },
    { id: 7, title: "Steps", value: 230, icon: <Footprints className="w-8 h-8 text-green-500" /> },
    { id: 8, title: "News Articles", value: 12, icon: <FileText className="w-8 h-8 text-blue-500" /> },



  ];

  const recentArticles = [
    { id: 1, title: "5 Tips for Healthy Eating", date: "Dec 21, 2025" },
    { id: 2, title: "Managing Anxiety at Home", date: "Dec 20, 2025" },
    { id: 3, title: "When to Visit a Doctor", date: "Dec 19, 2025" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <HomeNav />

      <main className="pt-24 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl  mb-4 font-bold text-teal-700">Your Personal Health Tracker</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="p-3 bg-white/20 rounded-xl">{stat.icon}</div>
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">{stat.title}</h3>
                <p className="text-gray-700 text-xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Health Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-gray-700 text-sm">{article.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
            onClick={()=>navigate('/checkup')}
            
            className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Stethoscope className="w-8 h-8 text-teal-500 mb-2" />
              <p className="text-gray-900 font-semibold">Check Symptoms</p>
            </div>
            <div 
            onClick={()=>navigate('/doctors')}
            
            className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src="/doctor.svg" alt="" className="w-10 fill-pink-600" />
              <p className="text-gray-900 font-semibold" >Consult Doctors</p>
            </div>
            <div
            onClick={()=>navigate('/hospitalsnearby')}

            className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Hospital className="w-8 h-8 text-orange-500 mb-2" />
              <p className="text-gray-900 font-semibold" >Hospitals Nearby</p>
            </div>
            <div
            
            onClick={()=>navigate('/articles')}
            className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <FileText className="w-8 h-8 text-blue-500 mb-2" />
              <p className="text-gray-900 font-semibold" >Read Articles</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
