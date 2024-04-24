import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import ContactForm from "@/components/ContactForm";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Page = () => {
  return (
    <>
      <BackgroundBeams />
      <AuroraBackgroundDemo />
      <div className="flex flex-col items-center justify-center w-screen h-screen  ">
        <div className="pt-[40px] pb-20">{/* <ContactForm /> */}</div>
        <div> </div>
      </div>
    </>
  );
};

export default Page;
