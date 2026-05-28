import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="text-2xl font-bold mb-6 text-white">آکادمی تحلیل‌گر</div>
          <p className="text-gray-500 text-sm leading-8">
            پیشرو در آموزش‌های تخصصی برنامه‌نویسی و هوش مصنوعی. ما به شما کمک می‌کنیم تا به یک متخصص سطح بالا تبدیل شوید.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">دسترسی سریع</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><Link href="/blog" className="hover:text-blue-500 transition-colors">مقالات آموزشی</Link></li>
            <li><Link href="/roadmap" className="hover:text-blue-500 transition-colors">نقشه راه یادگیری</Link></li>
            <li><Link href="/faq" className="hover:text-blue-500 transition-colors">سوالات متداول</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">شبکه‌های اجتماعی</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition-colors">اینستاگرام</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">تلگرام</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">یوتیوب</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">تماس با ما</h4>
          <p className="text-gray-500 text-sm leading-8">
            ایمیل: info@tahlilgaracademy.com<br/>
            تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
        © ۲۰۲۶ تمامی حقوق برای آکادمی تحلیل‌گر محفوظ است. طراحی شده با Next.js هدلس.
      </div>
    </footer>
  );
}
