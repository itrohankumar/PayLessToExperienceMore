import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PayLessToExperienceMore — Travel Deals on Flights & Hotels",
  description:
    "Curated flight, hotel, and getaway deals. Travel further for less with PayLessToExperienceMore.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2575eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
