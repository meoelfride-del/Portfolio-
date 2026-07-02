import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-slate-100">
      <Header />
      <main className="mx-auto flex w-full flex-1 max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;