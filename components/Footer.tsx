// کامپوننت‌های SVG اختصاصی برای حذف وابستگی به پکیج‌های معیوب
const GithubIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.26 1.23-.26 1.86v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const InstagramIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const SendIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>;

export default function Footer() {
  const socialLinks = [
    { Icon: GithubIcon, href: "#" },
    { Icon: InstagramIcon, href: "#" },
    { Icon: LinkedinIcon, href: "#" },
    { Icon: SendIcon, href: "#" },
  ];

  return (
    <footer className="relative pt-32 pb-12 border-t border-white/5 overflow-hidden bg-[#030712]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 text-right">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent italic tracking-tighter">
              ANALYZER ACADEMY
            </h2>
            <p className="text-slate-400 max-w-sm leading-loose mb-8">
              پیشرو در ارائه آموزش‌های نوین برنامه‌نویسی و تکنولوژی‌های نوظهور. ما معتقدیم آینده متعلق به کسانی است که امروز یاد می‌گیرند.
            </p>
            <div className="flex gap-4 justify-end md:justify-start flex-row-reverse">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                  <item.Icon />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">لینک‌های سریع</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">دوره‌های آموزشی</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">مقالات تخصصی</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">نقشه راه</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">درباره ما</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">ارتباط با ما</h4>
            <ul className="space-y-4 text-slate-400">
              <li>تهران، سعادت آباد، برج فناوری</li>
              <li>۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>info@analyzer.academy</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-slate-500 text-sm">
          <p dir="ltr">© {new Date().getFullYear()} Analyzer Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
