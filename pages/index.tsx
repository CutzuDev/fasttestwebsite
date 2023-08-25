import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import FVideo from "@/components/sections/FVideo";
import Landing from "@/components/sections/Landing";
import Package from "@/components/sections/Package";
import Recovery from "@/components/sections/Recovery";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="flex justify-center w-full items-center flex-col">
      <Landing />
      <About />
      <Benefits />
      <Package />
      <Recovery />
      <FVideo />
      <Footer />
    </main>
  );
}
