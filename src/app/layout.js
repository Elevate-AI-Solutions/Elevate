import Navbar from "@/components/Navbar";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import FollowCursor from "@/components/FollowCursor";
import Footer from "@/components/Footer";
import { ContactModalProvider } from "@/contexts/ModalContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "My Landing Page",
  description: "AI & Web Dev Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-black text-white">
        <ContactModalProvider>
          <Navbar />
          {typeof window !== "undefined" && window.innerWidth > 768 && (
            <FollowCursor />
          )}
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
