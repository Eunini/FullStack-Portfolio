import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Inioluwa Atanda | Portfolio',
  description:
    'Welcome to Inioluwa Atanda\'s portfolio! Explore projects, achievements, and skills in software development.',
  openGraph: {
    title: 'Inioluwa Atanda | Software Developer Portfolio',
    description:
      'Explore Inioluwa\'s projects, skills, and achievements in web development, cloud computing, and more!',
    images: [
      {
        url: '/logo.png',
        alt: 'Inioluwa Atanda Portfolio',
      },
    ],
    url: 'https://www.yourwebsite.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inioluwa Atanda | Portfolio',
    description: 'Explore my projects and achievements as a software developer.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
