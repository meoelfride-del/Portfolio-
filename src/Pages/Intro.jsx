import HeroBanner from "../components/HeroBanner";
import Cta from "../components/Cta";
import MyStory from "../components/MyStory";
import MyStory2 from "../components/MyStory2";
import MyProject from "../components/MyProject";
import iconStory from "../assets/img/icon-story.png";
import { featuredStories, heroContent, introStory, projectCards } from "../data/siteContent";
const Intro = () => {

  const projects = [
    {
      titre: "My Story 1",
      posts: "130+ Projets Livrés",
      category: "Category 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "June 30, 2020",
      time: "5 min read",
    },
    {
      titre: "My Story 2",
      posts: "130+ Projets Livrés",
      category: "Category 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "June 30, 2020",
      time: "5 min read",
    },
    {
      titre: "My Story 3",
      posts: "130+ Projets Livrés",
      category: "Category 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "June 30, 2020",
      time: "5 min read",
    },
  ];


  const myprojects = [
    {

      titre: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
    
      titre: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
     
      titre: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      titre: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    }
  ];



  return (
    <div className="space-y-8">
      <HeroBanner
        title={heroContent.title}
        description={heroContent.description}
        startButton={heroContent.ctaPrimary}
        learnMoreButton={heroContent.ctaSecondary}
        imageUrl={heroContent.imageUrl}
      />

      <Cta
        titre="Ready to Get Started?"
        projects="130+ Projets Livrés"
        contactButton="Contactez Moi"
        myContact="Mes Contacts"
      />

      <MyStory titre={introStory.title} description={introStory.description} />

      <div className="grid gap-4 lg:grid-cols-2">
        {featuredStories.map((project, index) => (
          <MyStory2
            key={`${project.titre}-${index}`}
            titre={project.titre}
            posts={project.posts}
            category={project.category}
            description={project.description}
            date={project.date}
            time={project.time}
          />
        ))}
      </div>

      <section className="rounded-[1.6rem] border border-white/10 bg-white/10 p-6 shadow-lg shadow-black/20 backdrop-blur sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
          <div className="flex items-center gap-3">
            <img src={iconStory} alt="icon story" className="h-6 w-6" />
            <h3 className="text-2xl font-semibold text-white">MY PROJECTS</h3>
          </div>
          <span className="text-sm text-slate-300">Selected work</span>
        </div>
        <div className="space-y-3">
          {projectCards.map((project, index) => (
            <MyProject key={`${project.titre}-${index}`} titre={project.titre} description={project.description} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Intro;
