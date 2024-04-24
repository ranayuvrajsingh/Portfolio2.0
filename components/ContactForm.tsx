import Image from "next/image";
import Link from "next/link";
import React from "react";
import LitUpBordersButton from "./ui/LitUpBordersButton";

const ContactForm = () => {
  return (
    <div className="mt-[1000px] ">
      <Link
        href={
          "https://drive.google.com/uc?id=1vEWkvgBeuBHNRGbX_1GiOCB17hGhn5WC&export=download"
        }
      >
        <LitUpBordersButton />
      </Link>
      <iframe
        src="https://drive.google.com/file/d/1vEWkvgBeuBHNRGbX_1GiOCB17hGhn5WC/preview?embedded=true"
        width="800px"
        height="1125px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default ContactForm;
