import { useState } from "react";
import LandingNav from "./LandingNav";
import { Stethoscope, Ambulance, Brain, Apple, Book,ChevronDown, ChevronUp,Facebook, Twitter, Instagram, Linkedin, Route  } from "lucide-react";
import { useNavigate } from "react-router-dom";
function LandingPage() {
const [openId , setopenId] = useState(null) 

const toggle =(id)=>{
   ! openId ? setopenId(id) : setopenId(null)
}
const navigate = useNavigate();

const faqData = [
  {
    id: 1,
    question: "Is SwasthyaSetu free to use?",
    answer: "Yes! SwasthyaSetu is completely free for everyone."
  },
  {
    id: 2,
    question: "Can I find nearby hospitals?",
    answer: "Absolutely! Our app provides instant access to nearby hospitals and emergency services."
  },
  {
    id: 3,
    question: "Is my data safe?",
    answer: "Yes. We respect your privacy and never share your personal data without permission."
  }
];
    const services = [
        {
          id: 1,
          title: "Consult with Doctor",
          description: "Check common symptoms and get awareness-based guidance on next steps from proffessional themselves.",
          icon: Stethoscope, 
        },
        {
          id: 2,
          title: "Emergency Access",
          description: "Quick access to emergency numbers, ambulance, and nearest hospitals.",
          icon: Ambulance,
        },
        {
          id: 3,
          title: "Mental Health Tips",
          description: "Learn how to manage stress, anxiety, and maintain mental well-being.",
          icon: Brain,
        },
        {
          id: 4,
          title: "Nutrition Guidance",
          description: "Get easy tips for healthy eating and lifestyle habits.",
          icon: Apple,
        },
        {
          id: 5,
          title: "Health Education",
          description: "Access short articles and tips on common health issues.",
          icon: Book,
        },
      ];
      
  return (
    <div className="bg-slate-200 relative min-h-screen">
      <LandingNav />

      <main className="min-h-screen flex flex-col justify-center items-center ">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 items-center min-h-[90vh] lg:px-10">
          <div className="flex mt-16 flex-col justify-center items-center md:items-start space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-600 ">
              SwasthyaSetu
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Connecting People to Healthcare and Awareness
            </p>
            <div
              to={"/login"}
              onClick={() => navigate("/login")}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Start Health Check
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="/heroimg.png"
              alt="Hero Illustration"
              className="w-full max-w-lg md:max-w-4xl"
            />
          </div>
        </div>

        <div className="my-10 w-full px-6">
          <h2 className="text-gray-800 text-3xl lg:text-4xl font-bold text-center mb-6">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white hover:scale-105 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center"
                >
                  <div className="mb-4 text-teal-500 flex items-center justify-center w-full">
                    <Icon size={56} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <section className="my-16 w-full px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => toggle(item.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{item.question}</h3>
                  {openId === item.id ? <ChevronUp /> : <ChevronDown />}
                </div>
                {openId === item.id && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
        <footer className="bg-gray-800 text-gray-200 w-full px-6 md:px-16 py-10 ">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 ">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">SwasthyaSetu</h3>
              <p className="text-gray-400 text-sm">
                Connecting people to healthcare and awareness, anytime,
                anywhere.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>
                  <a href="/" className="hover:text-teal-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-teal-400 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-teal-400 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-teal-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-white">Contact Us</h4>
              <p className="text-gray-400 text-sm">
                Email: support@swasthyasetu.com
              </p>
              <p className="text-gray-400 text-sm">Phone: +977-980-XXXXXXX</p>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="hover:text-teal-400">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-teal-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-teal-400">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-teal-400">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SwasthyaSetu. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default LandingPage;
