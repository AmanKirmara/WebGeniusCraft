import "./App.css";
import "../src/assets/styles/style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Service from "./pages/service/Service";
import Projects from "./pages/projects/Projects";
import Blogs from "./pages/Blogs/Blogs";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import PostForm from "./components/ContentEditor/PostForm";
import TermsAndConditions from "./pages/terms/TermsAndConditions";
import PrivacyPolicy from "./pages/terms/PrivacyPolicy";
import ExpertTeam from "./pages/ExpertTeam/ExpertTeam";
import NewsPage from "./pages/NewsPage/NewsPage";
// import HomeVi from "./pages/Home/HomeVi";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
    return setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/" element={<HomeVi />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/post-upload" element={<PostForm />} />
        <Route path="/terms" element={<TermsAndConditions />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/team" element={<ExpertTeam />} />
        <Route path="/latest-news" element={<NewsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
