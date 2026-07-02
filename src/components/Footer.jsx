import { Link } from "react-router-dom";
import MyIconesvg from "../assets/img/logo.svg";
import { Code2, Computer, Globe2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-primary/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-10">
        <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
          <Link to="/" className="flex items-center gap-3">
            <img src={MyIconesvg} alt="logo" className="h-8 w-8" />
            <span className="text-sm font-semibold text-white">John Doe</span>
          </Link>
          <p className="text-sm text-slate-300">
            © 2026 John Doe • Crafted with React and Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 text-slate-200 transition hover:border-secondary/50 hover:text-secondary">
            <Computer size={18} />
          </a>
          <a href="https://codepen.io" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 text-slate-200 transition hover:border-secondary/50 hover:text-secondary">
            <Code2 size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-3 text-slate-200 transition hover:border-secondary/50 hover:text-secondary">
            <Globe2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
