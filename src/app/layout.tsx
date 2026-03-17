import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Sarah Linda – Coach, Humoriste & Productrice d'Événements",
  description:
    "Spécialiste internationale de prises de conscience. Stand-up, Production d'événements, Communication digitale & Podcast.",
  keywords: ["Sarah Linda", "stand-up", "podcast", "coach", "humoriste", "production événements"],
  openGraph: {
    title: "Sarah Linda",
    description: "Spécialiste internationale de prises de conscience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
