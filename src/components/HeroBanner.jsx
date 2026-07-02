const HeroBanner = ({ title, description, startButton, learnMoreButton, imageUrl }) => {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 px-6 py-10 shadow-2xl shadow-black/20 backdrop-blur sm:px-8 lg:px-10 lg:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-secondary/30 bg-secondary/15 px-3 py-1 text-sm font-medium text-secondary">
            Portfolio • Creative Developer
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300 sm:text-xl">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
              href="/contact"
            >
              {startButton}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              href="/blog"
            >
              {learnMoreButton}
            </a>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-primary/50 p-3 shadow-lg">
          <img
            className="h-[320px] w-full rounded-[1.2rem] object-cover sm:h-[420px]"
            src={imageUrl}
            alt="Portfolio preview"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;