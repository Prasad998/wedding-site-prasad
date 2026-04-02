import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Details from "@/components/Details";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Story />
      <Gallery />
      <Events />
      <Details />
      <RSVP />
    </main>
  );
}