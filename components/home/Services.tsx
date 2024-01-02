import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaConnectdevelop,
  FaGlobe,
  FaRegIdCard,
  FaTicket,
  FaWalkieTalkie,
} from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { GiRadarDish } from "react-icons/gi";

const Services = () => {
  const parentRef = useRef(null);

  const controlMiddle = useAnimation();
  const controlSide1 = useAnimation();
  const controlSide2 = useAnimation();
  const controlOuter1 = useAnimation();
  const controlOuter2 = useAnimation();
  const controlOuter3 = useAnimation();
  const controlOuter4 = useAnimation();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animations when parentDiv is in view
          controlMiddle.start({ marginLeft: 40, marginRight: 40 });
          controlSide1.start({ marginLeft: 40, marginRight: 40 });
          controlSide2.start({ marginLeft: 40, marginRight: 40 });
          controlOuter1.start({ marginLeft: 40, marginRight: 40 });
          controlOuter2.start({ marginLeft: 40, marginRight: 40 });
          controlOuter3.start({ marginLeft: 40, marginRight: 40 });
          controlOuter4.start({ marginLeft: 40, marginRight: 40 });
        } else {
          // Return to initial state when not in view
          controlMiddle.start({ marginLeft: 120, marginRight: 120 });
          controlSide1.start({ marginLeft: 80, marginRight: 80 });
          controlSide2.start({ marginLeft: 80, marginRight: 120 });
          controlOuter1.start({ marginLeft: 60, marginRight: 60 });
          controlOuter2.start({ marginLeft: 60, marginRight: 60 });
          controlOuter3.start({ marginLeft: 40, marginRight: 40 });
          controlOuter4.start({ marginLeft: 40, marginRight: 40 });
        }
      });
    }, options);

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controlMiddle, controlSide1, controlSide2, controlOuter1, controlOuter2]);

  return (
    <div
      ref={parentRef}
      id="parentDiv"
      className="bg-blue-950 h-fit grid grid-cols-3 place-content-center md:flex md:h-44 p-6 md:px-16 overflow-x-scroll md:overflow-x-hidden justify-center items-center overflow-hidden"
    >
      <motion.div
        className="flex-shrink-0 w-fit h-fit text-center flex flex-col items-center justify-self-center"
        initial={{ marginLeft: 0, marginRight: 40 }}
        animate={controlOuter3}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center">
          <FaWalkieTalkie className="text-blue-900 text-md md:text-lg" />
        </button>
        <p className="font-medium text-base mt-2 text-white">Buy Airtime</p>
      </motion.div>
      <motion.div
        className="flex-shrink-0 w-fit h-fit text-center flex flex-col items-center justify-self-center"
        initial={{ marginLeft: 60, marginRight: 60 }}
        animate={controlOuter1}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center">
          <FaConnectdevelop className="text-blue-900 text-md md:text-lg" />
        </button>
        <p className="font-medium text-base mt-2 text-white">Buy Data</p>
      </motion.div>
      <motion.div
        className="flex-shrink-0 w-fit h-fit text-center flex flex-col items-center justify-self-center"
        initial={{ marginLeft: 80, marginRight: 80 }}
        animate={controlSide1}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center">
          <TbBulbFilled className="text-blue-900 text-md md:text-lg" />
        </button>
        <p className="font-medium text-base mt-2 text-white">Electricity</p>
      </motion.div>
      <motion.div
        className="flex-shrink-0 w-fit h-fit text-center flex flex-col items-center justify-self-center"
        initial={{ marginLeft: 120, marginRight: 120 }}
        animate={controlMiddle}
        transition={{ duration: 0.5 }}
      >
        <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center">
          <GiRadarDish className="text-blue-900 text-md md:text-lg" />
        </button>
        <p className="font-medium text-base mt-2 text-white">Cable</p>
      </motion.div>
      <motion.div
        className="flex-shrink-0 w-fit h-fit text-center flex flex-col items-center justify-self-center"
        initial={{ marginLeft: 80, marginRight: 80 }}
        animate={controlSide2}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center">
          <FaGlobe className="text-blue-900 text-md md:text-lg" />
        </button>
        <p className="font-medium text-base mt-2 text-white">Internet</p>
      </motion.div>
      <motion.div
        className="flex-shrink-0 w-fit h-fit text-center flex flex-col items-center justify-self-center"
        initial={{ marginLeft: 60, marginRight: 60 }}
        animate={controlOuter2}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center">
          <FaTicket className="text-blue-900 text-md md:text-lg" />
        </button>
        <p className="font-medium text-base mt-2 text-white">Buy Ticket</p>
      </motion.div>
      <motion.div
        className="flex-shrink-0 w-fit h-fit text-center flex flex-col items-center justify-self-center"
        initial={{ marginLeft: 40, marginRight: 0 }}
        animate={controlOuter4}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center">
          <FaRegIdCard className="text-blue-900 text-md md:text-lg" />
        </button>
        <p className="font-medium text-base mt-2 text-white">WAEC Pin</p>
      </motion.div>
    </div>
  );
};

export default Services;
