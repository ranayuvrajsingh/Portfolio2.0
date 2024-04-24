/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../app/my-projects/work.module.css";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";

const Work = () => {
  return (
    <>
      <WavyBackground style={{ overflow: "auto" }}>
        <h1 className="gradient-title glass-header z-10 fixed top-0 w-[98%] shadow-md text-3xl md:text-4xl lg:text-5xl font-bold text-center py-4">
          Projects
        </h1>
        <div className={styles.imgContainer}>
          <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
            <h1 className={styles.text}>LoomCall</h1>
            <Link href="https://loomcall.vercel.app/" target={"_blank"}>
              {" "}
              <img className={styles.img3} src="/loomcall.png" alt="Image" />
            </Link>
            <div
              className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
            ></div>
          </div>
          <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
            <h1 className={styles.text}>Stellar Styles</h1>
            <Link href="https://stellarstyles.vercel.app/" target={"_blank"}>
              {" "}
              <img className={styles.img3} src="/Ecoom.jpg" alt="Image" />
            </Link>
            <div
              className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
            ></div>
          </div>
          <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
            <h1 className={styles.text}>CityScope Media Light Mode</h1>
            <Link href="https://www.cityscope.media/" target={"_blank"}>
              {" "}
              <img
                className={styles.img3}
                src="/Cityscopelight.png"
                alt="Image"
              />
            </Link>
            <div
              className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
            ></div>
          </div>
          <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
            <h1 className={styles.text}>CityScope Media Dark Mode</h1>
            <Link href="https://www.cityscope.media/" target={"_blank"}>
              {" "}
              <img className={styles.img3} src="/Cityscope.png" alt="Image" />
            </Link>
            <div
              className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
            ></div>
          </div>
          <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
            <h1 className={styles.text}>I Show Speed</h1>
            <Link
              href="https://ishowspeed-ten.vercel.app/?limit=20"
              target={"_blank"}
            >
              {" "}
              <img className={styles.img1} src="/iShowSpeed.png" alt="Image" />
            </Link>
            <div
              className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
            ></div>
          </div>
          <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
            <h1 className={styles.text}>E-Commerce DashBoard</h1>
            <Link href="https://ecommercebyyuvj.netlify.app/" target={"_blank"}>
              {" "}
              <img
                className={styles.img2}
                src="/Ecommerce Dashboard.png"
                alt="Image"
              />
            </Link>
            <div
              className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
            ></div>
          </div>
          <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
            <h1 className={styles.text}>Apple Vision Clone</h1>
            <Link
              href="https://apple-vision-pro-clone.vercel.app/"
              target={"_blank"}
            >
              {" "}
              <img className={styles.img3} src="Apple Clone.png" alt="Image" />
            </Link>
            <div
              className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
            ></div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
};

export default Work;
