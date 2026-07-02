import MyIcone from "../assets/img/icon-uses.png";

const UsesComponent = ({ title, description, items }) => {
  return (
    <section className="w-full rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur sm:p-10 lg:p-12">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-secondary/20 p-2">
          <img src={MyIcone} alt="icon uses" className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">{title}</h1>
      </div>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>

      <div className="mt-10 space-y-5">
        <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/20 p-6">
          <h3 className="text-2xl font-semibold text-white">Computer + Workspace</h3>
          <ul className="mt-4 list-disc space-y-4 pl-6 text-slate-300">
            {items.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-white">{item.title}:</span> {item.body}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UsesComponent;
