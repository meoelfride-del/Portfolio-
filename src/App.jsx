
import Layout from "./components/Layout";
import Intro from "./Pages/Intro";
import Blogs from "./Pages/Blogs";
import Uses from "./Pages/Uses";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/uses" element={<Uses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>    
  );
}

export default App;