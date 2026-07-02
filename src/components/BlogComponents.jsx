import MyStoryimg from "../assets/img/icon-story.png";

const BlogComponents = ({ title, description }) => {
  return (
    <section className="w-full rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur sm:p-10 lg:p-12">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-secondary/20 p-2">
          <img src={MyStoryimg} alt="icon envelope" className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
      </div>

      <div className="mt-5 max-w-3xl">
        <p className="text-lg leading-8 text-slate-300 sm:text-xl">{description}</p>
      </div>

      <form className="mt-8 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          id="subscribe"
          placeholder="Drop that email here…"
          className="w-full rounded-full border border-white/20 bg-slate-950/30 px-5 py-4 text-white placeholder:text-slate-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40"
        />
        <button
          type="submit"
          className="rounded-full bg-secondary px-6 py-4 text-lg font-semibold text-slate-950 transition hover:brightness-110"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default BlogComponents;
