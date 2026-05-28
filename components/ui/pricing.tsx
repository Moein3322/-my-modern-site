import React from "react";
export default function PricingSection() {
  return (
    <div className="py-20 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">پلن‌های آموزشی</h2>
        <div className="bg-gradient-to-b from-blue-600/20 to-transparent p-12 rounded-3xl border border-blue-500/20">
          <h3 className="text-2xl font-bold mb-4">دوره جامع فرانت‌اند</h3>
          <p className="text-4xl font-bold mb-8">۴,۹۰۰,۰۰۰ تومان</p>
          <button className="bg-white text-black px-10 py-3 rounded-full font-bold hover:bg-gray-200 transition">ثبت نام در دوره</button>
        </div>
      </div>
    </div>
  );
}
