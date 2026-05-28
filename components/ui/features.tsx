import React from "react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    { title: "آموزش پروژه محور", desc: "یادگیری با انجام پروژه‌های واقعی دنیای کار." },
    { title: "پشتیبانی دائمی", desc: "تیم منتورینگ ما همیشه در کنار شماست." },
    { title: "مدرک معتبر", desc: "ارائه گواهی پایان دوره برای رزومه شما." }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4" id="courses">
      <h2 className="text-3xl font-bold text-center mb-12">چرا آکادمی تحلیل‌گر؟</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition group">
            <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition">{f.title}</h3>
            <p className="text-gray-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
