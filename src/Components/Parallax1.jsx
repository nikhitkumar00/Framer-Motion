import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax1() {
  const refference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refference,
    offset: ["start start", "end start"],
  });

  // parallax speed
  const background = useTransform(scrollYProgress, [0, 1], ["-28%", "150%"]);
  const mountain = useTransform(scrollYProgress, [0, 1], ["-22%", "110%"]);
  const jungle1 = useTransform(scrollYProgress, [0, 1], ["-20%", "90%"]);
  const jungle2 = useTransform(scrollYProgress, [0, 1], ["-18%", "85%"]);
  const jungle3 = useTransform(scrollYProgress, [0, 1], ["-12%", "80%"]);
  const jungle4 = useTransform(scrollYProgress, [0, 1], ["-9%", "20%"]);
  const jungle5 = useTransform(scrollYProgress, [0, 1], ["-3%", "35%"]);
  const man = useTransform(scrollYProgress, [0, 1], ["5%", "25%"]);

  return (
    <div id="top" ref={refference} className="bg-[#FFAF1B]">
      <div className="bold relative z-[2] flex h-[10vh] w-full flex-col items-center justify-center gap-4 text-4xl text-[#DE711D]  md:h-60 md:text-6xl">
        <span>
          <a href="#bottom">SCROLL</a>
        </span>
        <svg
          className="w-10 animate-bounce fill-[#DE711D]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <g transform="matrix(0.83 0 0 0.83 12 12)">
            <path
              transform=" translate(-15, -15.5)"
              d="M 3 12 L 3 10 C 3 9.614 3.223 9.262 3.572 9.096 C 3.9210000000000003 8.93 4.334 8.981 4.634 9.226 L 15 17.708 L 25.367 9.225999999999999 C 25.666 8.981 26.079 8.931 26.429000000000002 9.095999999999998 C 26.779 9.261 27 9.614 27 10 L 27 12 C 27 12.3 26.865 12.584 26.633 12.774000000000001 L 15.633 21.774 C 15.264 22.075 14.735 22.075 14.366 21.774 L 3.3659999999999997 12.774000000000001 C 3.135 12.584 3 12.3 3 12 z"
            />
          </g>
        </svg>
      </div>
      <motion.div className="relative h-screen w-full">
        <motion.div
          style={{
            y: background,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            willChange: "transform",
          }}
          className="absolute inset-0 z-[1] h-screen w-full bg-background bg-no-repeat"
        ></motion.div>
        <motion.div
          style={{
            y: mountain,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            willChange: "transform",
          }}
          className="absolute inset-0 z-[3] w-full bg-mountain bg-no-repeat"
        ></motion.div>
        <motion.div
          style={{
            y: jungle1,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            willChange: "transform",
          }}
          className="absolute inset-0 z-[4] h-screen w-full bg-jungle1 bg-no-repeat"
        ></motion.div>
        <motion.div
          style={{
            y: jungle2,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            willChange: "transform",
          }}
          className="absolute inset-0 z-[5] w-full bg-jungle2 bg-no-repeat"
        ></motion.div>
        <motion.div
          style={{
            y: jungle3,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            willChange: "transform",
          }}
          className="absolute inset-0 z-[6] w-full bg-jungle3 bg-no-repeat"
        ></motion.div>
        <motion.div
          style={{
            y: jungle4,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            willChange: "transform",
          }}
          className="absolute inset-0 z-[7] w-full bg-jungle4 bg-no-repeat"
        ></motion.div>
        <motion.div
          style={{
            y: jungle5,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            willChange: "transform",
          }}
          className="absolute inset-0 z-[8] w-full bg-jungle5 bg-no-repeat"
        ></motion.div>
        <motion.div
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: man,
            willChange: "transform",
          }}
          className="absolute inset-0 z-[9] w-full bg-man bg-no-repeat"
        ></motion.div>
      </motion.div>
      <div
        id="bottom"
        className="bold relative z-[10] flex h-screen w-full flex-col items-center justify-center gap-4 bg-gradient-to-r from-[#280003] to-[#210002] text-4xl text-[#FFAF1B] md:text-6xl"
      >
        <span>
          <a href="#top">SCROLL UP</a>
        </span>
        <div className="flex gap-2">
          <a
            href="https://nikhitkumar.netlify.app/"
            className="border-1 rounded-lg bg-[#FFAF1B] px-4 py-2  text-sm text-[#210002] hover:bg-[#210002] hover:text-[#FFAF1B] hover:ring-1 hover:ring-[#FFAF1B] md:text-lg"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/nikhitkumar00"
            className="border-1 rounded-lg bg-[#FFAF1B] px-4 py-2  text-sm text-[#210002] hover:bg-[#210002] hover:text-[#FFAF1B] hover:ring-1 hover:ring-[#FFAF1B] md:text-lg"
          >
            GitHub
          </a>
          <a
            href="https://nikhitkumar.netlify.app/#contact"
            className="border-1 rounded-lg bg-[#FFAF1B] px-4 py-2  text-sm text-[#210002] hover:bg-[#210002] hover:text-[#FFAF1B] hover:ring-1 hover:ring-[#FFAF1B] md:text-lg"
          >
            Contact
          </a>
          <div className="absolute bottom-0 left-0 w-full py-10 text-center text-sm md:text-lg">
            Created by NIKHIT KUMAR 🤓
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parallax1;
