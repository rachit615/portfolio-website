import Image from "next/image";

const EducationalJourney = () => {
  return (
    <section className="relative dark:bg-trueGray-900 mx-auto px-5 sm:px-6 lg:px-8 z-[1]">
      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col lg:flex-row lg:space-x-10 my-10">
          {/* Education Image */}
          <div
            className="lg:flex-1 lg:max-w-[40%] mx-auto lg:mx-0 flex justify-center"
            style={{
              lineHeight: "1.5",
              // transform: "translateY(-340px) translateZ(0px)",
            }}
          >
            <Image
              alt="Education"
              src="/images/Rachit_Gupta.jpg"
              width={300}
              height={450}
              className="w-auto h-[450px] rounded-xl dark:brightness-[0.8] z-[1]"
            />
          </div>

          {/* Education Details */}
          <div className="lg:flex-1 mt-10 lg:mt-0 flex flex-col justify-center">
            <h4 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Building a Foundation of{" "}
              <span className="text-emerald-700">Excellence</span>: My
              Educational Journey
            </h4>

            {/* B.Tech Details */}
            <div className="flex items-start space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 w-20 h-11 rounded-full">
                <Image
                  alt="DTU"
                  src="/images/jssate.png"
                  width={44}
                  height={44}
                  className="h-11 w-20"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Bachelor of Engineering (Computer Science and Engineering)
                </h3>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  JSS Academy Of Technical Education , Bengaluru, Karnataka
                </h4>
                <p className="mt-1 text-base text-gray-500 dark:text-gray-400 text-left">
                  At JSSATE, I pursued a B.E in Computer Science, laying a
                  strong foundation in core technical subjects and practical
                  applications. With a CGPA of 8.1, I engaged in a rigorous
                  curriculum that included software development, algorithms, and
                  systems engineering. My undergraduate experience was marked by
                  hands-on projects and internships that fueled my passion for
                  technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalJourney;
