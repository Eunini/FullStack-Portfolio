import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { structuredData, websiteStructuredData, portfolioStructuredData } from "./lib/structured-data";

export const metadata = {
  title: "Home",
  description: "Inioluwa Atanda - Professional Full-Stack Developer specializing in React, Next.js, Node.js, Python, Django, and cloud technologies. Explore my portfolio of innovative web applications.",
  openGraph: {
    title: "Inioluwa Atanda | Full-Stack Developer & Software Engineer",
    description: "Professional Full-Stack Developer with 3+ years of experience. Specializing in modern web technologies and cloud solutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inioluwa Atanda - Full-Stack Developer Portfolio",
      }
    ],
  }
};

export default function Home() {
  return (
    <ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />
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
