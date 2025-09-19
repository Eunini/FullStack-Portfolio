import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="container mt-16 sm:mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <Contact />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}
