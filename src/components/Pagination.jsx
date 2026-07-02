const Pagination = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <span className="cursor-pointer rounded-full border border-secondary bg-secondary/20 px-4 py-2 font-semibold text-secondary">
        1
      </span>
      <span className="cursor-pointer rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold text-slate-200 transition hover:border-secondary/50 hover:text-secondary">
        2
      </span>
      <span className="cursor-pointer rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold text-slate-200 transition hover:border-secondary/50 hover:text-secondary">
        3
      </span>
      <span className="cursor-pointer rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold text-slate-200 transition hover:border-secondary/50 hover:text-secondary">
        Next →
      </span>
    </div>
  );
};

export default Pagination;
