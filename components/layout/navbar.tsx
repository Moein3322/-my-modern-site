import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between" dir="rtl">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            آکادمی تحلیل‌گر
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">صفحه اصلی</Link>
            <Link href="/blog" className="hover:text-white transition-colors">وبلاگ</Link>
            <Link href="/courses" className="hover:text-white transition-colors">دوره ها</Link>
            <Link href="/about" className="hover:text-white transition-colors">درباره ما</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition">
            ورود / ثبت نام
          </Link>
        </div>
      </div>
    </nav>
  );
}
