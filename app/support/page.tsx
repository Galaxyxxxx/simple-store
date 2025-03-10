import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

export default function Support() {
    return (
        <div className="flex-auto h-screen">
            <div className="flex-row justify-center h-1/16 sticky top-0 bg-white outline">
                <Navbar />
            </div>
            <div className="w-1/2 justify-center place-self-center">
                <div className="place-self-center text-4xl">Welcome to Simple Store Support Page!</div>
                <Input />
                <Input />
                <Input />
            </div>
            <div className="h-1/13">
                <Footer />
            </div>
        </div>
    );
  }