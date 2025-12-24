
import { Send } from 'lucide-react';
import HomeNav from './HomeNav';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <HomeNav />
      <div className="flex justify-center items-center px-4 pt-32 w-full">

        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
          <header className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
            <p className="text-slate-500 text-sm mt-2">How can we help with your health journey?</p>
          </header>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-3 border-b border-slate-200 focus:border-blue-500 outline-none transition-colors"
            />
            
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border-b border-slate-200 focus:border-blue-500 outline-none transition-colors"
            />
            
            <textarea 
              placeholder="Message" 
              rows="3"
              className="w-full p-3 border-b border-slate-200 focus:border-blue-500 outline-none transition-colors resize-none"
            ></textarea>

            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
              <span>Send Message</span>
              <Send size={16} />
            </button>
          </form>

          <footer className="mt-8 text-center text-xs text-slate-400">
            Typically responds in 24 hours
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;