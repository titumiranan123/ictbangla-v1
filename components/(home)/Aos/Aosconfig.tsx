"use client";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Aosconfig = () => {
   useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
        offset: 80,
        easing: 'ease',
      });
    }, []);
  return <></>;
};

export default Aosconfig;
