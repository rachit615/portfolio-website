import Image from "next/image";

const Hero = () => {
  return (
    <section className="container p-8 mx-auto flex relative flex-wrap min-h-[90vh] lg:min-h-[auto]">
      {/* Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute h-full inset-0 z-20 bg-gradient-to-b dark:from-trueGray-900/10 dark:via-trueGray-900/20 dark:to-trueGray-900 from-white/10 via-white/20 to-white sm:hidden"
      ></div>

      {/* Left Side - Text Content */}
      <div className="flex items-center w-full lg:w-1/2 z-20">
        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Ideas into Reality: Crafting{" "}
            <br className="block lg:hidden" />
            <span className="text-[#2db2d2] font-extrabold hover:scale-105 hover:text-[#03986b] transition-all delay-100 ease-linear">
              Seamless Digital Experiences
            </span>
          </h1>
          <p className="py-5 text-base w-[90%] lg:w-full leading-normal text-black lg:text-xl xl:text-xl dark:text-gray-300">
            Hey there, I'm Rachit Gupta — an enthusiastic problem-solver and
            tech enthusiast on a mission to create impactful digital
            experiences. With a robust foundation in various tech stacks
            including React, Next, Tailwind, HTML, CSS, JavaScript and more, I
            specialize in turning complex challenges into elegant solutions. My
            expertise also extends to SEO, ensuring that your digital projects
            not only look great but are easily discoverable. Dive into my
            portfolio and let's build something amazing together!
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/rachit615/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 mt-6 text-gray-500 dark:text-gray-400"
            >
              <svg
                className="w-8 h-8 fill-gray-500 dark:fill-gray-400 invert-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10.954 22h-2.95v-9.492h2.95zM9.449 11.151a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44M22.004 22h-2.948v-4.616c0-1.101-.02-2.517-1.533-2.517-1.535 0-1.771 1.199-1.771 2.437V22h-2.948v-9.492h2.83v1.297h.04c.394-.746 1.356-1.533 2.791-1.533 2.987 0 3.539 1.966 3.539 4.522z"></path>
              </svg>
              <span> View on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Placeholder for Image or Animation */}
      <div className="flex items-center justify-center w-full lg:w-1/2 relative glitchParent">
        <div className="glitchnew fixed inset-0 h-full w-full object-cover glitchAnim"></div>
      </div>
    </section>
  );
};

export default Hero;
