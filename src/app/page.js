import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inioluwa Atanda | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Inioluwa Atanda's portfolio! Explore projects, achievements, and skills in software development."
        />

        {/* Open Graph (OG) Tags for Social Media */}
        <meta
          property="og:title"
          content="Inioluwa Atanda | Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Inioluwa's projects, skills, and achievements in web development, cloud computing, and more!"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inioluwa Atanda | Portfolio" />
        <meta
          name="twitter:description"
          content="Explore my projects and achievements as a software developer."
        />
        <meta name="twitter:image" content="/logo.png" />

        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <Contact />
        <Footer />
        </div>
      </main>
    </>
  );
}
