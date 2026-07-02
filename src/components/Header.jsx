import { useState } from "react";
import MyStoryimg from "../assets/img/icon-story.png";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../data/siteContent";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="rounded-full bg-white/10 p-2">
            <img src={MyStoryimg} alt="logo" className="h-8 w-8" />
          </span>
          <p className="text-xl font-semibold text-white">John Doe</p>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-secondary" : "text-slate-200 hover:text-secondary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full border border-secondary/70 bg-secondary/15 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-slate-950 sm:inline-flex"
          >
            Let&apos;s talk
          </Link>

          <button
            type="button"
            className="rounded-full border border-white/15 bg-white/10 p-2 text-white lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-primary/95 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navigation.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive ? "bg-secondary/20 text-secondary" : "text-slate-200 hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
