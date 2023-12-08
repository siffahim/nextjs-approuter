import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-2xl text-black">{children}</div>
      <Footer />
    </div>
  );
}
