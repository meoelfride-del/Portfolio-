import BlogComponents from "../components/BlogComponents";
import MyStory2 from "../components/MyStory2";
import Pagination from "../components/Pagination";
import { blogHero, blogPosts } from "../data/siteContent";

const Blogs = () => {
  return (
    <div className="space-y-6">
      <BlogComponents title={blogHero.title} description={blogHero.description} />

      <div className="grid gap-4 lg:grid-cols-2">
        {blogPosts.map((post, index) => (
          <MyStory2
            key={`${post.titre}-${index}`}
            titre={post.titre}
            posts={post.posts}
            category={post.category}
            description={post.description}
            date={post.date}
            time={post.time}
          />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default Blogs;