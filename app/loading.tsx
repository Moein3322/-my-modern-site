export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#020617] z-[100] flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-cyan-500/10 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
