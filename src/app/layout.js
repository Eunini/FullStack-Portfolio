import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DEVINI Portfolio | Full Stack Web Developer',
  description:
    'Explore the DEVINI portfolio showcasing cutting-edge web development projects, expertise in full stack development, and innovative digital solutions.',
  openGraph: {
    title: 'DEVINI Portfolio | Full Stack Web Developer',
    description:
      'Explore the DEVINI portfolio showcasing cutting-edge web development projects, expertise in full stack development, and innovative digital solutions.',
    images: [
      {
        url: '/images/logo.jpg',
        alt: 'DEVINI Portfolio Logo',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Global Navbar */}
        <main>{children}</main> 
      </body>
    </html>
  );
}
