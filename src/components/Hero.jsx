import { styles } from "../styles";
import Test from "./Test";

const Hero = () => {
  return (
    <section
      className={`relative w-full lg:h-screen mx-auto flex flex-row gap-5 justify-end h-[94vh] sm:h-[100vh] md:h-[130vh]`}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex lg:flex-row flex-col items-center lg:items-start gap-5`}
      >
        <div className="lg:flex flex-col justify-center items-center mt-5 hidden">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, <br /> I'm <span className="text-[#915EFF]">Narmin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I developing websites, user interfaces and{" "}
            <br className="sm:block hidden" />
            web applications.
          </p>
        </div>
        <Test />
      </div>
    </section>
  );
};

export default Hero;
