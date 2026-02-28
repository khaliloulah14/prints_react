export default function Footer() {
  return (
    <footer className="w-full bg-[#334155] text-white pt-12 pb-8 border-t-2 border-cyan-500/50 shadow-[0_-10px_20px_-5px_rgba(6,182,212,0.2)]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* MENU DE NAVIGATION */}
        <nav className="flex flex-col items-center gap-4 mb-10 font-medium tracking-wide">
          {['Home', 'All products', 'About HDX', 'My account', 'Contact'].map((link) => (
            <a key={link} href="#" className="hover:text-cyan-400 transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>

        {/* ICONES SOCIALES (SVG NATIFS) */}
        <div className="flex gap-4 mb-12">
          {/* Facebook */}
          <SocialSquare>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </SocialSquare>
          
          {/* Twitter / X */}
          <SocialSquare>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </SocialSquare>
          
          {/* Instagram */}
          <SocialSquare>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </SocialSquare>
          
          {/* Youtube */}
          <SocialSquare>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
          </SocialSquare>
        </div>

        {/* SECTION COPYRIGHT */}
        <div className="w-full border-t border-white/5 pt-8 text-center space-y-2">
          <p className="text-sm text-gray-400">
            Copyright © 2026 <span className="text-white">Custom Printing Pro</span>
          </p>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">
            Powered by Custom Printing Pro
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialSquare({ children }) {
  return (
    <div className="w-11 h-11 bg-slate-800/50 hover:bg-cyan-500 hover:text-white flex items-center justify-center rounded-sm cursor-pointer transition-all duration-300 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
      {children}
    </div>
  );
}