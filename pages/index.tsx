import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Landing from "@/components/sections/Landing";

export default function Home() {
  return (
    <main className="flex justify-center w-full items-center flex-col">
      <Landing />
      <About />
      <Benefits />
    </main>
  );
}
