import { Link } from "react-router-dom";

const Cta = ({ titre, projects, contactButton, myContact }) => {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 px-6 py-10 shadow-xl shadow-black/20 backdrop-blur sm:px-8 lg:py-14">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
          Collaboration
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {titre}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          {projects}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
          >
            {contactButton}
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
          >
            {myContact}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;