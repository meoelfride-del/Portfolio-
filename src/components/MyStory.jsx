import MyStoryimg from "../assets/img/icon-story.png";

const MyStory = ({ titre, description }) => {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-white/10 p-8 shadow-lg shadow-black/20 backdrop-blur sm:p-10">
      <div className="flex items-center gap-3 pb-6">
        <div className="rounded-full bg-secondary/20 p-2">
          <img src={MyStoryimg} alt="icon story" className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-semibold text-white">{titre}</h3>
      </div>
      <p className="max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
    </section>
  );
};

export default MyStory;