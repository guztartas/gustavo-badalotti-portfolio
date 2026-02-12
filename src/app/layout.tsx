import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const bodyFont = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
});

const displayFont = Syne({
  variable: '--font-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gustavo Badalotti | Database Engineer',
  description:
    'Portfolio of Gustavo Badalotti: Database Engineer specialized in PostgreSQL performance, low-latency replication, and production-grade data infrastructure.',
  openGraph: {
    title: 'Gustavo Badalotti | Database Engineer',
    description:
      'PostgreSQL and performance-focused portfolio with experience in AlloyDB, CloudSQL, ETL pipelines, and production incident handling.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initScript = `
    (() => {
      const LOCALE_KEY = "gb-locale";
      const THEME_KEY = "gb-theme";
      const storedLocale = window.localStorage.getItem(LOCALE_KEY);
      const browserLocale = window.navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en-US";
      const locale = storedLocale === "pt-BR" || storedLocale === "en-US" ? storedLocale : browserLocale;
      document.documentElement.lang = locale;
      const storedTheme = window.localStorage.getItem(THEME_KEY);
      const preference = storedTheme === "light" || storedTheme === "dark" || storedTheme === "system" ? storedTheme : "dark";
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const theme = preference === "system" ? systemTheme : preference;
      document.documentElement.dataset.theme = theme;
      document.documentElement.dataset.themePreference = preference;
    })();
  `;

  return (
    <html lang='en-US' suppressHydrationWarning>
      <head>
        <Script id='gb-init-theme-and-locale' strategy='beforeInteractive'>
          {initScript}
        </Script>
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
