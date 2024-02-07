
//Importing font globaly
import { Inter } from "next/font/google";

import '@fontsource/pacifico';
import '@fontsource-variable/urbanist';

import "./globals.css";

//Components

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "A simple ecommerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       
        {children}
      </body>
    </html>
  );
}
