import Hero from "@/components/Hero";
import { ExperienceSection } from "@/features/experience";
import Projects from "@/features/projects";
export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <Projects />
    </>
  );
}