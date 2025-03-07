import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Cart() {
  return (
    <div className="flex-auto h-screen">
        <div className="flex-row justify-center h-1/16 sticky top-0 bg-white outline">
          <Navbar />
        </div>
        <div className="h-1/13">
          <Footer />
        </div>
    </div>
  );
}
