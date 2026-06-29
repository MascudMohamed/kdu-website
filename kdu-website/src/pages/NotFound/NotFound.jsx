// src/pages/NotFound/NotFound.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function NotFound() {
  return (
    <main className="relative min-h-screen w-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/30 flex items-center justify-center overflow-hidden p-6 select-none">
      
      {/* Structural Dynamic Background Blur Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#3b71ca]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#1e3a8a]/10 blur-[140px] pointer-events-none" />

      {/* Main Interactive Glassmorphic Content Card */}
      <motion.div 
        className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl max-w-xl w-full text-center px-8 py-16 md:px-12 md:py-20 shadow-[0_20px_50px_rgba(30,58,138,0.05)] z-10"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Dynamic Structural Code Badge */}
        <div className="inline-flex items-center justify-center bg-red-50 text-red-600 font-extrabold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Error Status Code: 404
        </div>

        {/* Primary Vector Large Graphical Typography */}
        <h1 className="text-7xl md:text-8xl font-black text-[#1e3a8a] tracking-tighter mb-4 selection:bg-blue-100">
          Oops!
        </h1>
        
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight mb-3">
          Requested Page Not Found
        </h2>
        
        <p className="text-slate-500 font-medium leading-relaxed max-w-sm mx-auto mb-10 text-sm md:text-base">
          The link you followed may be broken, or the page has been permanently relocated within our core architecture directory updates.
        </p>

        {/* Navigation Action Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-[#3b71ca] hover:bg-[#2c5da7] text-white font-bold text-sm tracking-wide rounded-full shadow-md shadow-blue-500/10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Return to Homepage
          </Link>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 border border-slate-200 hover:border-slate-300 bg-white/50 text-slate-600 hover:text-slate-800 font-bold text-sm tracking-wide rounded-full hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Report System Issue
          </Link>
        </div>

        {/* Structural Footer Accent Details */}
        <div className="mt-12 flex items-center justify-center gap-2 opacity-40">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" />
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" />
        </div>
      </motion.div>
    </main>
  );
}