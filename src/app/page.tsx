import Hero from "@/components/sections/Hero";
import Pipeline from "@/components/sections/Pipeline";
import PocketLab from "@/components/sections/PocketLab";
import CommandCenter from "@/components/sections/CommandCenter";
import Architecture from "@/components/sections/Architecture";
import DownloadSection from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Pipeline />
      <PocketLab />
      <CommandCenter />
      <Architecture />
      <DownloadSection />
      <FAQ />
      <Contact />
    </>
  );
}
