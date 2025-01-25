import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Navbar } from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AboutPage from "./Pages/About";
import NotFound from "./Pages/NotFound";
import LearningEvents from "./Pages/LearningEvents";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learning-events" element={<LearningEvents />} />
        <Route path="/courses" element={<NotFound />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
