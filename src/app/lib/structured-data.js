export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Inioluwa Atanda",
  "jobTitle": "Full-Stack Developer",
  "description": "Professional Full-Stack Developer specializing in React, Next.js, Node.js, Python, Django, and cloud technologies.",
  "url": "https://inioluwa-atanda.vercel.app",
  "image": "https://inioluwa-atanda.vercel.app/images/hero-image.png",
  "email": "your-email@example.com",
  "telephone": "+1234567890",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Nigeria"
  },
  "sameAs": [
    "https://github.com/Eunini",
    "https://www.linkedin.com/in/inioluwa-atanda",
    "https://wa.me/message/TFFG2ETW5L3CH1"
  ],
  "knowsAbout": [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Cloud Computing",
    "Web Development",
    "Software Engineering",
    "API Development",
    "Database Design",
    "DevOps",
    "Responsive Design"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Full-Stack Development Certification",
      "description": "Certified in modern web development technologies"
    }
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Your University/Institution"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance Developer"
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Inioluwa Atanda Portfolio",
  "description": "Professional portfolio showcasing full-stack development projects and expertise",
  "url": "https://inioluwa-atanda.vercel.app",
  "author": {
    "@type": "Person",
    "name": "Inioluwa Atanda"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://inioluwa-atanda.vercel.app/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Inioluwa Atanda Developer Portfolio",
  "description": "A collection of web applications and software projects demonstrating full-stack development expertise",
  "author": {
    "@type": "Person",
    "name": "Inioluwa Atanda"
  },
  "dateCreated": "2024",
  "genre": "Software Development",
  "inLanguage": "en-US",
  "keywords": "React, Next.js, Node.js, Python, Django, Full-Stack Development, Web Applications"
};
