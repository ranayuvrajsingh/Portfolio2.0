import Image from "next/image";
import Link from "next/link";
import React from "react";
import LitUpBordersButton from "./ui/LitUpBordersButton";

const ContactForm = () => {
  return (
    <div className="mt-[300px] sm:mt-20 md:mt-40 lg:mt-60">
      <Link
        href="https://drive.google.com/uc?id=1vEWkvgBeuBHNRGbX_1GiOCB17hGhn5WC&export=download"
        className="block"
      >
        <button className=" text-white font-bold py-2 px-4 rounded">
          <LitUpBordersButton />
        </button>
      </Link>
      <div
        className="relative overflow-hidden"
        style={{ paddingTop: "141.25%" }}
      >
        <iframe
          src="https://drive.google.com/file/d/1vEWkvgBeuBHNRGbX_1GiOCB17hGhn5WC/preview?embedded=true"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
