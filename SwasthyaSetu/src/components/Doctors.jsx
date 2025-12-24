import { Calendar, ChevronRight, Globe, MapPin, Phone, Star } from "lucide-react";
import HomeNav from "./HomeNav"

const Doctors = () => {

    const doctors = [
        {
          id: 1,
          name: "Dr. Jasmir Banjade",
          specialty: "General Physician",
          experience: "12 years",
          rating: 4.8,
          availability: "Available Today",
          location: "Downtown Medical Center",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
          contact: "+1-555-0101",
          fees: "$50",
          languages: ["English", "Spanish"]
        },
        {
          id: 2,
          name: "Dr. Sunil Gaire",
          specialty: "Cardiologist",
          experience: "15 years",
          rating: 4.9,
          availability: "Next: Mon, 10:00 AM",
          location: "Heart & Vascular Clinic",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
          contact: "+1-555-0102",
          fees: "$120",
          languages: ["English"]
        },
        {
          id: 3,
          name: "Dr. Puja Belbase",
          specialty: "Pediatrician",
          experience: "8 years",
          rating: 4.7,
          availability: "Available Today",
          location: "Children's Health Hub",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara",
          contact: "+1-555-0103",
          fees: "$40",
          languages: ["English", "Igbo"]
        },
        {
          id: 4,
          name: "Dr. Martin Khadka",
          specialty: "Mental Health / Psychologist",
          experience: "10 years",
          rating: 4.9,
          availability: "Online Only",
          location: "Remote",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
          contact: "+1-555-0104",
          fees: "$80",
          languages: ["English", "Spanish", "Portuguese"]
        },
        {
          id: 5,
          name: "Dr. Elina Thapa",
          specialty: "Dermatologist",
          experience: "20 years",
          rating: 4.6,
          availability: "Next: Wed, 02:00 PM",
          location: "Northside Skin Clinic",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
          contact: "+1-555-0105",
          fees: "$90",
          languages: ["English", "Mandarin"]
        }
      ];

  return (
   <div className="min-h-screen bg-slate-200">
    <HomeNav />
    <div className="my-4 flex justify-center px-4 pt-20 w-full">
<div className="my-6 flex flex-col items-center gap-3 w-full">
<h2 className="text-3xl font-bold text-center ">Consult Available Doctors</h2>
    <div className="grid my-3 grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {doctors.map((doctor) =>{
           return(
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-5">
      
      
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-24 h-24 rounded-full bg-slate-100 border-2 border-blue-50"
                />
                <div className="absolute -bottom-1 -right-1 bg-white px-2 py-0.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-1 text-xs font-bold text-slate-700">
                  <Star size={12} className="fill-yellow-400 text-yellow-400" />
                  {doctor.rating}
                </div>
              </div>
            </div>
      
         
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md">
                  {doctor.specialty}
                </span>
              </div>
      
              <div className="space-y-1.5 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-slate-400" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" />
                  <span className={doctor.availability.includes('Today') ? 'text-green-600 font-medium' : ''}>
                    {doctor.availability}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-slate-400" />
                  <div className="flex gap-1 uppercase text-[10px] font-bold">
                    {doctor.languages.map(lang => (
                      <span key={lang} className="bg-slate-100 px-1.5 py-0.5 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
      
     
            <div className="flex flex-col justify-center gap-2 min-w-[140px]">
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors">
                <Phone size={16} />
                Contact
              </button>
              <button className="w-full flex items-center justify-center gap-1 text-slate-500 hover:text-blue-600 text-sm font-medium py-2 transition-colors">
                View Profile
                <ChevronRight size={16} />
              </button>
            </div>
      
          </div>
           )
        })}
    </div>
    </div>    
    </div>
   </div>
  )
}

export default Doctors
