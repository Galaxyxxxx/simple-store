import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

export default function Support() {
    return (
        <div className="flex-auto h-screen">
            <div className="flex-row justify-center h-1/13 sticky top-0 bg-white outline">
                <Navbar />
            </div>
            <div className="w-1/2 h-11/13 justify-center place-self-center">
                <div className="place-self-center text-4xl">Welcome to Simple Store Support Page!</div>
                <div className="place-self-center text-4xl pt-5">What is your problem?</div>
                <div className="place-self-center text-4xl pt-5 w-1/2"><Input className="pt-5 w-full"/></div>
                <div className="place-self-center text-4xl pt-5 w-1/2"><Input className="pt-5"/></div>
                <div className="place-self-center text-4xl pt-5 w-1/2"><Input className="pt-5"/></div>
            </div>
            <div className="h-1/13">
                <Footer />
            </div>
        </div>
    );
  }