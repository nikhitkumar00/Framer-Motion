import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax1() {
    return (<div className="relative bg-slate-500 h-screen w-full flex justify-center items-center">
        <div className="bg-jungle1 absolute inset-0"></div>
        <div className="bg-jungle2 absolute inset-0"></div>
        <div className="bg-jungle3 absolute inset-0"></div>
        <div className="bg-jungle4 absolute inset-0"></div>
        <div className="bg-jungle5 absolute inset-0"></div>
        <div className="bg-logo absolute inset-0"></div>
        <div className="bg-man absolute inset-0"></div>
        <div className="bg-mountain absolute inset-0"></div>
    </div> );
}

export default Parallax1;