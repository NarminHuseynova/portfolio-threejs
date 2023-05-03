import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import girllogo from "../assets/company/girl.png";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

const Test = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 550px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="xl:flex-row flex-col-reverse overflow-hidden md:h-[100vh] h-[100%]">
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div
          className={`${
            isMobile ? "w-[50vh] h-[50vh]" : "w-[65vh] h-[65vh]"
          } relative flex items-center justify-center`}
        >
          <Canvas className=" hidden md:flex">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={isMobile ? 1.5 : 2.4}>
                <MeshDistortMaterial
                  attach="material"
                  color="#541981"
                  distort={0.3}
                  speed={2.5}
                  isMobile={isMobile}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img className="img" src={girllogo} />
        </div>
      </motion.div>
    </div>
  );
};

export default Test;
