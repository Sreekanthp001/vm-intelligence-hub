"use client";
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, RefreshCw } from "lucide-react";

// Mock Data Generator (To show action)
const generateData = () => [
  { name: 'Jan', sales: Math.floor(Math.random() * 5000), users: Math.floor(Math.random() * 3000) },
  { name: 'Feb', sales: Math.floor(Math.random() * 5000), users: Math.floor(Math.random() * 3000) },
  { name: 'Mar', sales: Math.floor(Math.random() * 5000), users: Math.floor(Math.random() * 3000) },
  { name: 'Apr', sales: Math.floor(Math.random() * 5000), users: Math.floor(Math.random() * 3000) },
  { name: 'May', sales: Math.floor(Math.random() * 5000), users: Math.floor(Math.random() * 3000) },
  { name: 'Jun', sales: Math.floor(Math.random() * 5000), users: Math.floor(Math.random() * 3000) },
];

export default function IntelligenceHub() {
  const [chartData, setChartData] = useState(generateData());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Mimic API Call
    setTimeout(() => {
      setChartData(generateData());
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <header className="max-w-7xl mx-auto mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-teal-400">VENTUREMOND</h1>
          <p className="text-zinc-500 text-sm">Real-time Intelligence Hub</p>
        </div>
        
        {/* Active Action Button */}
        <button 
          onClick={handleRefresh}
          className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl hover:bg-zinc-800 transition-all text-sm font-medium"
        >
          <RefreshCw size={16} className={isRefreshing ? "animate-spin text-teal-400" : "text-teal-400"} />
          {isRefreshing ? "Fetching Data..." : "Refresh Intelligence"}
        </button>
      </header>

      <main className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {/* Revenue Card with Interaction */}
           <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-teal-500/50 transition-colors cursor-pointer group" onClick={() => alert('Opening Revenue Reports...')}>
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-teal-500/10 rounded-lg"><DollarSign className="text-teal-400" /></div>
                <span className="text-[10px] text-teal-500 font-bold group-hover:underline">VIEW DETAILS</span>
              </div>
              <p className="text-sm text-zinc-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">$45,231</h3>
           </div>
           {/* ... Other cards can follow same pattern */}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
           <h3 className="mb-8 font-semibold text-lg flex items-center gap-2">
             <TrendingUp size={20} className="text-teal-400"/> Sales Performance Matrix
           </h3>
           <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                  <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{fill: '#222'}}
                    contentStyle={{backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px'}} 
                  />
                  <Bar dataKey="sales" fill="#14b8a6" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
           </div>
        </div>
      </main>
    </div>
  );
}