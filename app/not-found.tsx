import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-black text-white/10 absolute -z-10">404</h1>
      <h2 className="text-4xl font-bold mb-4">مسیر رو گم کردی! 🧭</h2>
      <p className="text-slate-400 mb-8">صفحه‌ای که دنبالش بودی پیدا نشد یا جابجا شده.</p>
      <Link href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
        برگشت به خانه
      </Link>
    </div>
  );
}
