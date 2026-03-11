import { useState } from 'react';
import { Activity, Cpu, Radio, Shield } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', coherence: 85, resonance: 40 },
  { time: '00:05', coherence: 88, resonance: 45 },
  { time: '00:10', coherence: 82, resonance: 50 },
  { time: '00:15', coherence: 90, resonance: 55 },
  { time: '00:20', coherence: 95, resonance: 60 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 font-sans">
      <header className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Activity className="text-emerald-500" /> QUANTUM_BLUEJAY Monitor
        </h1>
        <div className="text-xs text-zinc-500 font-mono">SYSTEM STATUS: OPERATIONAL</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-zinc-400">
            <Cpu size={16} />
            <span className="text-xs uppercase tracking-wider">Coherence Level</span>
          </div>
          <div className="text-3xl font-bold">95.2%</div>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-zinc-400">
            <Radio size={16} />
            <span className="text-xs uppercase tracking-wider">Resonance Freq</span>
          </div>
          <div className="text-3xl font-bold">60.4 THz</div>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-2 mb-2 text-zinc-400">
            <Shield size={16} />
            <span className="text-xs uppercase tracking-wider">Security Mesh</span>
          </div>
          <div className="text-3xl font-bold">ACTIVE</div>
        </div>
      </div>

      <div className="mt-6 bg-zinc-900 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-sm font-medium mb-4 text-zinc-400 uppercase tracking-wider">Telemetry Stream</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="time" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none' }} />
              <Line type="monotone" dataKey="coherence" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="resonance" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
