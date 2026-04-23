export default function SPowMiner() {
  const [mining, setMining] = useState(false);
  const [hashRate, setHashRate] = useState(0);

  return (
    <div className="bg-slate-950 p-6 rounded-[2.5rem] border-2 border-blue-600/20 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
      <div className="flex justify-between mb-6">
        <h3 className="text-white font-black italic text-sm uppercase">SPoW Mobile Terminal</h3>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-blue-500 animate-ping"></div>
          <span className="text-[8px] text-blue-500 font-bold">NODE ACTIVE</span>
        </div>
      </div>

      {/* The Visual Mining "Engine" */}
      <div className="h-32 bg-black/50 rounded-2xl border border-white/5 flex items-center justify-center mb-6 overflow-hidden relative">
        {mining && <div className="absolute inset-0 bg-blue-600/5 animate-pulse"></div>}
        <p className="text-blue-400 font-mono text-2xl tracking-[0.5em]">{hashRate} H/s</p>
      </div>

      <button 
        onClick={() => setMining(!mining)}
        className={`w-full py-5 rounded-2xl font-black italic tracking-widest transition-all ${
          mining ? 'bg-red-600/20 text-red-500 border border-red-500/30' : 'bg-blue-600 text-white'
        }`}
      >
        {mining ? "STOP SPoW ENGINE" : "START HABA MINING"}
      </button>

      <div className="mt-4 text-center">
        <p className="text-[9px] text-gray-500 uppercase tracking-widest">
          Mining Speed Boosted by Solar/Wind Data Feed
        </p>
      </div>
    </div>
  );
}
