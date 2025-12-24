
import { MapPin, Clock, Phone, Navigation, ShieldCheck } from 'lucide-react';
import HomeNav from './HomeNav';
const HospitalsNearby = () => {
  const hospitalsNearby = [
    {
      id: 1,
      name: "City General Hospital",
      distance: "1.2 km",
      address: "Budhki Chowk , Butwal",
      emergencyWait: "15 min",
      openStatus: "Open 24/7",
      specialties: ["Emergency", "Trauma", "Surgery"],
      rating: 4.5,
      contact: "+1-555-9001",
      features: ["Wheelchair Accessible", "Ambulance Service", "On-site Pharmacy"],
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 2,
      name: "Butwal Pvt Hospital",
      distance: "0.6km",
      address: "Sukhanagar , Butwal-8",
      emergencyWait: "10 min",
      openStatus: "Closes at 8 PM",
      specialties: ["Pediatrics", "Vaccination", "Neonatal Care"],
      rating: 4.9,
      contact: "9863583890",
      features: ["Kids Play Area", "Breastfeeding Room", "Free Parking"],
      coordinates: { lat: 40.7060, lng: -74.0080 }
    },
    {
      id: 3,
      name: "Lions Eye Hospital",
      distance: "4.5 km",
      address: "Near fulbari Chowk , Butwal",
      emergencyWait: "10 min",
      openStatus: "Open 24/7",
      specialties: ["Opthamology", "Diagnostics"],
      rating: 4.7,
      contact: "9863583890",
      features: ["Valet Parking", "Multilingual Staff", "Cafeteria"],
      coordinates: { lat: 40.7150, lng: -73.9990 }
    },
    {
      id: 4,
      name: " Mental Health Institute",
      distance: "5.1 miles",
      address: "MilanChowk,Butwal",
      emergencyWait: "No Wait",
      openStatus: "Open 24/7",
      specialties: ["Psychiatry", "Counseling", "Therapy"],
      rating: 4.8,
      contact: "9863583890",
      features: ["Private Rooms", "Quiet Zones", "Telehealth Support"],
      coordinates: { lat: 40.7200, lng: -74.0100 }
    }
  ];
  const getWaitColor = (time) => {
    const mins = parseInt(time);
    if (mins <= 15) return 'text-green-600 bg-green-50 border-green-100';
    if (mins <= 30) return 'text-yellow-600 bg-yellow-50 border-yellow-100';
    return 'text-red-600 bg-red-50 border-red-100';
  };
  return (
    <div className="min-h-screen bg-slate-100">
    <HomeNav />
    <div className="flex justify-center items-center px-4 pt-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {hospitalsNearby.map((hospital) =>(
            <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {hospital.name}
                  </h3>
                  {hospital.openStatus.includes("24/7") && (
                    <ShieldCheck size={16} className="text-blue-500" title="Verified 24/7" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <MapPin size={14} />
                  <span>{hospital.distance} • {hospital.address}</span>
                </div>
              </div>
              
              {/* Wait Time Badge */}
              <div className={`px-3 py-1 rounded-full border text-xs font-bold flex flex-col items-center ${getWaitColor(hospital.emergencyWait)}`}>
                <span className="opacity-70 uppercase text-[10px]">ER Wait</span>
                <span>{hospital.emergencyWait}</span>
              </div>
            </div>
      
            <div className="flex flex-wrap gap-2 mb-5">
              {hospital.specialties.map((spec, index) => (
                <span key={index} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                  {spec}
                </span>
              ))}
            </div>
      
         
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-50">
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition">
                <Phone size={16} />
                Call
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-sm shadow-blue-200">
                <Navigation size={16} />
                Directions
              </button>
            </div>
          </div>
          ))}
        </div>
        </div> </div>
  )
}

export default HospitalsNearby
