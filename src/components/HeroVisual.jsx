import React from 'react';
import { TrendingUp, Users, DollarSign, Activity, ChevronRight } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="relative w-full flex items-center justify-center py-6 lg:py-0">
      {/* Background Soft Purple/Blue Glow Filter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-blue-600/25 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Vector Light Lines */}
      <div className="absolute -top-10 right-0 w-72 h-72 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="url(#hero-gradient)" strokeWidth="1.5" d="M 0,100 C 50,0 150,200 200,100" />
          <defs>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Elevated Laptop Container */}
      <div className="relative w-full max-w-xl group perspective-1000">
        
        {/* Laptop Screen Bezel */}
        <div className="relative bg-[#0d0f17] border border-white/10 rounded-2xl p-2 sm:p-3 shadow-2xl shadow-indigo-950/60 transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
          
          {/* Web Cam & Camera Dot */}
          <div className="flex justify-center items-center pb-2 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gray-800 border border-gray-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
          </div>

          {/* Screen Inner Display Frame */}
          <div className="w-full bg-[#07090e] rounded-xl overflow-hidden border border-white/5 p-3 sm:p-5 text-gray-200">
            
            {/* Mockup Dashboard Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-bold text-xs">
                  W
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Dashboard</h4>
                  <p className="text-[10px] text-gray-400">Web Hub Analytics</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                </span>
                <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-300">
                  A
                </div>
              </div>
            </div>

            {/* Top Stat Cards Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
              
              <div className="bg-[#0b0e17] border border-white/5 p-2 sm:p-2.5 rounded-lg">
                <div className="flex items-center justify-between text-gray-400 text-[10px] mb-1">
                  <span>Total Users</span>
                  <Users className="w-3 h-3 text-indigo-400" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">12.5K</div>
                <div className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +14%
                </div>
              </div>

              <div className="bg-[#0b0e17] border border-white/5 p-2 sm:p-2.5 rounded-lg">
                <div className="flex items-center justify-between text-gray-400 text-[10px] mb-1">
                  <span>Revenue</span>
                  <DollarSign className="w-3 h-3 text-purple-400" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">$8,420</div>
                <div className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +28%
                </div>
              </div>

              <div className="bg-[#0b0e17] border border-white/5 p-2 sm:p-2.5 rounded-lg">
                <div className="flex items-center justify-between text-gray-400 text-[10px] mb-1">
                  <span>Conversion</span>
                  <Activity className="w-3 h-3 text-blue-400" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">3.2%</div>
                <div className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +4.2%
                </div>
              </div>

            </div>

            {/* Smooth Glowing Purple Area Chart */}
            <div className="bg-[#0b0e17] border border-white/5 p-3 rounded-lg mb-3">
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="font-medium text-gray-300">Performance Trend</span>
                <span className="text-[9px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">This Month</span>
              </div>
              <div className="h-20 w-full relative flex items-end pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 70">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818CF8" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#818CF8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,55 Q 50,15 100,35 T 200,20 T 300,5 L 300,70 L 0,70 Z"
                    fill="url(#chart-grad)"
                  />
                  <path
                    d="M 0,55 Q 50,15 100,35 T 200,20 T 300,5"
                    fill="none"
                    stroke="#818CF8"
                    strokeWidth="2.5"
                  />
                  <circle cx="200" cy="20" r="3.5" fill="#C084FC" className="animate-ping" />
                  <circle cx="200" cy="20" r="3.5" fill="#A855F7" />
                </svg>
              </div>
            </div>

            {/* Bottom Activity Stream */}
            <div className="bg-[#0b0e17] border border-white/5 p-2.5 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold flex items-center justify-center">
                  H
                </div>
                <div className="text-[10px]">
                  <p className="font-medium text-gray-200">New order registered</p>
                  <p className="text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            </div>

          </div>
        </div>

        {/* Laptop Keyboard Base & Hinge */}
        <div className="relative mx-auto w-[92%] h-3 bg-gradient-to-b from-[#1e2336] to-[#0c0e17] rounded-b-xl border-x border-b border-white/10 shadow-lg">
          <div className="w-16 h-1 bg-gray-600/50 rounded-full mx-auto mt-0.5" />
        </div>

        {/* Dark Mountain / Terrain Base Silhouette */}
        <div className="mt-2 w-full h-12 bg-gradient-to-t from-[#050608] via-[#050608]/80 to-transparent pointer-events-none -translate-y-4" />
      </div>
    </div>
  );
}
