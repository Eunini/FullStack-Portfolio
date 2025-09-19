import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata = {
  metadataBase: new URL('https://inioluwa-atanda.vercel.app'),
  title: {
    default: 'Inioluwa Atanda | Full-Stack Developer & Software Engineer',
    template: '%s | Inioluwa Atanda'
  },
  description: 'Inioluwa Atanda - Full-Stack Developer specializing in React, Next.js, Node.js, Python, Django, and cloud technologies. Expert in building scalable web applications, APIs, and modern digital solutions.',
  keywords: [
    'Inioluwa Atanda',
    'Full-Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Python Developer',
    'Django Developer',
    'JavaScript Expert',
    'TypeScript Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Cloud Computing',
    'AWS',
    'Portfolio',
    'Software Development',
    'Web Applications',
    'API Development',
    'Database Design',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'DevOps',
    'Responsive Design',
    'UI/UX'
  ],
  authors: [{ name: 'Inioluwa Atanda' }],
  creator: 'Inioluwa Atanda',
  publisher: 'Inioluwa Atanda',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inioluwa-atanda.vercel.app',
    title: 'Inioluwa Atanda | Full-Stack Developer & Software Engineer',
    description: 'Professional Full-Stack Developer with expertise in React, Next.js, Node.js, Python, Django, and cloud technologies. Explore my portfolio of innovative web applications and software solutions.',
    siteName: 'Inioluwa Atanda Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Inioluwa Atanda - Full-Stack Developer Portfolio',
        type: 'image/png',
      },
      {
        url: '/images/logo.jpg',
        width: 512,
        height: 512,
        alt: 'Inioluwa Atanda Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    creator: '@your_twitter_handle',
    title: 'Inioluwa Atanda | Full-Stack Developer & Software Engineer',
    description: 'Professional Full-Stack Developer specializing in modern web technologies. Explore my portfolio of innovative projects and technical expertise.',
    images: [
      {
        url: '/images/og-image.png',
        alt: 'Inioluwa Atanda - Full-Stack Developer Portfolio',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/images/logo.jpg', sizes: '512x512', type: 'image/jpeg' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['mailto:your-email@example.com', 'https://inioluwa-atanda.vercel.app'],
    },
  },
  category: 'technology',
  classification: 'Personal Portfolio',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  alternates: {
    canonical: 'https://inioluwa-atanda.vercel.app',
    languages: {
      'en-US': 'https://inioluwa-atanda.vercel.app',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1E40AF" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Inioluwa Atanda" />
        <meta name="application-name" content="Inioluwa Atanda Portfolio" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
