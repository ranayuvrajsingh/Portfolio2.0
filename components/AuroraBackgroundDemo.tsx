"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import ContactForm from "./ContactForm";
import GitHubCalendar from "react-github-calendar";
// import GitHubCalendarComponent from "./GitHubCalendar";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="overflow-y-auto overflow-hidden text-3xl md:text-7xl font-bold dark:text-white text-center h-[100vh]">
          <div className="overflow-y-auto  overflow-hidden  flex flex-col items-center justify-center w-screen h-screen  ">
            <div className=" pt-[40px] pb-20">
              <ContactForm />
            </div>
            <div
              style={{
                // backgroundColor: "#262523", // Tooltip background color
                color: "#fff", // Tooltip text color
                borderRadius: "4px", // Tooltip border radius
                padding: "8px", // Padding for the tooltip content
                fontSize: "12px",
                // Font size for the tooltip text
                maxWidth: "1200px",
                maxHeight: "500px",
              }}
            >
              <h1 className="gradient-title glass-header z-10  top-0 w-[98%] shadow-md text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4">
                Github Contribution
              </h1>
              <GitHubCalendar username={"ranayuvrajsingh"} />
            </div>
          </div>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4"></div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
