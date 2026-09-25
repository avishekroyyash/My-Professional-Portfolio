import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/Component/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//for my portfolio 


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Avishek Roy Yash | Full Stack Developer",
  description:
    "Portfolio of Avishek Roy Yash - Full Stack Developer and Software Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
           <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
