import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax1() {
  const refference = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refference,
    offset: ["start start", "end start"],
  });

  const background = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const logo = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const mountain = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const jungle1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const jungle2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const jungle3 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const jungle4 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const jungle5 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const man = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <div className="relative h-screen w-full" ref={refference}>
      <motion.div
        style={{
          y: background,
          backgroundImage: 'url("./src/assets/background.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 -z-50 h-screen w-full"
      ></motion.div>
      <motion.div
        style={{
          y: logo,
          backgroundImage: 'url("./src/assets/logo_land.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 -z-40 w-full"
      ></motion.div>
      <motion.div
        style={{
          y: mountain,
          backgroundImage: 'url("./src/assets/mountains.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 -z-20 w-full"
      ></motion.div>
      <motion.div
        style={{
          y: jungle1,
          backgroundImage: 'url("./src/assets/jungle1.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 z-0 h-screen w-full"
      ></motion.div>
      <motion.div
        style={{
          y: jungle2,
          backgroundImage: 'url("./src/assets/jungle2.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 z-10 w-full"
      ></motion.div>
      <motion.div
        style={{
          y: jungle3,
          backgroundImage: 'url("./src/assets/jungle3.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 z-20 w-full"
      ></motion.div>
      <motion.div
        style={{
          y: jungle4,
          backgroundImage: 'url("./src/assets/jungle4.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 z-30 w-full"
      ></motion.div>
      <motion.div
        style={{
          y: jungle5,
          backgroundImage: 'url("./src/assets/jungle5.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 z-40 w-full"
      ></motion.div>
      <motion.div
        style={{
          y: man,
          backgroundImage: 'url("./src/assets/man_on_mountain.png")',
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 z-50 w-full"
      ></motion.div>
    </div>
  );
}

export default Parallax1;
