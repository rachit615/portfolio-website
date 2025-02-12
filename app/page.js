import Image from "next/image";
import Hero from "./_components/Hero";
import GrowthChronicles from "./_components/GrowthChronicles";
import Experiences from "./_components/Experiences";
import EducationalJourney from "./_components/EducationalJourney";
import WhyMe from "./_components/WhyMe";
import MyLife from "./_components/MyLife";
import CoreTechnologies from "./_components/CoreTechnologies";
import ExperienceShowcase from "./_components/ExperienceShowcase";

export default function Home() {
  return (
    <div className="pt-2 mx-auto bg-[#171717]">
      <div className="mt-10 md:mt-20"></div>
      <Hero />
      <GrowthChronicles />
      <Experiences />
      <EducationalJourney />
      <WhyMe />
      <CoreTechnologies />
      <ExperienceShowcase />
      <MyLife />
    </div>
  );
}
