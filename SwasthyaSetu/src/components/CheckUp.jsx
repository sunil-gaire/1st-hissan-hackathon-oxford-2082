import { useState } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";
import HomeNav from "./HomeNav";

const symptomsList = [
  "Fever",
  "Cough",
  "Headache",
  "Fatigue",
  "Shortness of Breath",
  "Sore Throat",
  "Nausea",
];

const CheckUp = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [result, setResult] = useState(null);

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSubmit = () => {
    if (selectedSymptoms.length === 0) {
      setResult({ type: "warning", message: "Please select at least one symptom." });
      return;
    }
    if (selectedSymptoms.includes("Shortness of Breath") || selectedSymptoms.includes("Fever")) {
      setResult({ type: "danger", message: "Consult a doctor immediately." });
    } else {
      setResult({ type: "safe", message: "Monitor your symptoms and rest." });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
    <HomeNav />
  

    <div className="pt-28 px-4 flex justify-center">
      <div className="w-full max-w-xl">
        
        
        <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 shadow-xl">
          
       
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Personal Symptom Checker
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Select symptoms to get basic health guidance
            </p>
          </div>
  
           <div className="flex flex-wrap gap-3 justify-center mb-6">
            {symptomsList.map((symptom) => (
              <button
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300
                  ${
                    selectedSymptoms.includes(symptom)
                      ? "bg-teal-500 text-white border-teal-500 shadow-md scale-105"
                      : "bg-white/60 text-gray-800 border-gray-300 hover:bg-teal-100"
                  }`}
              >
                {symptom}
              </button>
            ))}
          </div>
  
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-600 transition shadow-md"
          >
            Analyze Symptoms
          </button>
  
      
          {result && (
            <div
              className={`mt-6 p-4 rounded-xl flex items-start gap-3 text-sm
                ${
                  result.type === "danger"
                    ? "bg-red-100 text-red-700"
                    : result.type === "safe"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {result.type === "danger" ? (
                <AlertTriangle className="w-5 h-5 mt-0.5" />
              ) : result.type === "safe" ? (
                <CheckCircle className="w-5 h-5 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 mt-0.5" />
              )}
              <span className="leading-relaxed">{result.message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default CheckUp;
