import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import { Navbar } from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AboutPage from "./Pages/About";
import CoursesPage from "./Pages/Courses";
import CoursePage from "./Pages/CourseInfo";
import NotFound from "./Pages/NotFound";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learning-events" element={<NotFound />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CoursePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster /> 
    </BrowserRouter>
  );
};

export default App;
