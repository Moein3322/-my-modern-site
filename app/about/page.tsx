import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-4xl font-black text-white">
          A
        </div>
      </div>
      
      <h1 className="text-4xl font-black mb-6">درباره آکادمی تحلیلگر</h1>
      <p className="text-slate-400 text-lg leading-loose mb-12">
        ما در آکادمی تحلیلگر، با استفاده از جدیدترین تکنولوژی‌های دنیای وب مثل Next.js 16 و Headless WordPress، 
        تلاش می‌کنیم تا مرزهای تجربه کاربری را جابجا کنیم. هدف ما ارائه محتوای باکیفیت و سریع در محیطی زیباست.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "سرعت", value: "۱۰۰٪", desc: "بهینه‌سازی شده با Next.js" },
          { label: "امنیت", value: "بالا", desc: "ساختار Headless" },
          { label: "طراحی", value: "مدرن", desc: "Tailwind CSS v4" },
        ].map((item, i) => (
          <div key={i} className="glass p-6 rounded-3xl border border-white/5">
            <div className="text-blue-400 font-black text-2xl mb-2">{item.value}</div>
            <div className="text-white font-bold mb-1">{item.label}</div>
            <div className="text-slate-500 text-xs">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
