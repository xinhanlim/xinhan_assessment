import type { Metadata } from "next";
import './styles/globals.scss'
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "LIM XIN HAN TASK ASSESSMENT",
  description: "For Assessment Purpose",
  keywords: [
    "assessment",
  ],
  robots: {
  index: true,  
  follow: true, 
}
};

const rotisBold = localFont({
  src: "./fonts/ATRotisSemiSans.ttf",
  variable: "--font-rotis-bold",
});

const rotisSemi = localFont({
  src: "./fonts/ATRotisSemiSans.ttf",
  variable: "--font-rotis-semi",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${rotisBold.variable} ${rotisSemi.variable}`}
      >
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 6000,
          }}
        />
      </body>
    </html>
  );
}
