import MyStoryimg from "../assets/img/icon-story.png";
import { Link } from "react-router-dom";

const MyProject = ({ titre, description }) => {
  return (
    <Link
      to="/contact"
      className="group mb-4 flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/10 px-5 py-4 transition hover:-translate-y-1 hover:border-secondary/60 hover:bg-white/15 sm:px-6"
    >
      <span className="pr-6">
        <h4 className="text-lg font-semibold text-white">{titre}</h4>
        <p className="mt-1 text-sm leading-7 text-slate-300">{description}</p>
      </span>
      <span className="rounded-full bg-secondary/20 p-2 transition group-hover:bg-secondary/30">
        <img src={MyStoryimg} className="h-5 w-5" alt="chevron right" />
      </span>
    </Link>
  );
};

export default MyProject;
