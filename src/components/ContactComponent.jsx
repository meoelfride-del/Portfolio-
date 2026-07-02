import Myimg from "../assets/img/icon-contact.png";

const ContactComponent = ({ title, description }) => {
  return (
    <section className="w-full rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur sm:p-10 lg:p-12">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-secondary/20 p-2">
          <img src={Myimg} alt="icon envelope" className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
      </div>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>

      <form className="mt-10 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-200">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="What should I call you?"
              className="w-full rounded-2xl border border-white/20 bg-slate-950/30 px-5 py-4 text-white placeholder:text-slate-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40"
            />
          </div>
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-200">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Drop that email here…"
              className="w-full rounded-2xl border border-white/20 bg-slate-950/30 px-5 py-4 text-white placeholder:text-slate-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40"
            />
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-200">Your Message</label>
          <textarea
            id="message"
            rows="7"
            placeholder="Tell me all the things that you think I need to hear…"
            className="w-full rounded-2xl border border-white/20 bg-slate-950/30 px-5 py-4 text-white placeholder:text-slate-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40"
          ></textarea>
        </div>

        <button className="rounded-full bg-secondary px-6 py-3 text-lg font-semibold text-slate-950 transition hover:brightness-110">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactComponent;
