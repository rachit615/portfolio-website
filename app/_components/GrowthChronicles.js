import Image from "next/image";

const GrowthChronicles = () => {
  return (
    <section
      id="chronicles"
      className="container  dark:bg-trueGray-900 mx-auto px-8 relative overflow-x-clip py-16 sm:py-24 lg:py-32 text-left"
    >
      {/* Section Heading */}
      <h1
        className="text-transparent mb-16 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        style={{
          lineHeight: "1.5",
          // transform: "translateY(100px) translateZ(0px)", dynamic
        }}
      >
        Growth Chronicles
      </h1>

      <div className="mb-14 flex flex-col sm:flex-row">
        {/* Left Content */}
        <div className="pr-0 sm:pr-20 flex flex-col justify-center w-full">
          <h4 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 text-left">
            Building Dreams with <span className="text-emerald-700">Code</span>:
            A Glimpse into My Professional Journey
          </h4>
          <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            From my early days as a coding enthusiast to leading ambitious tech
            projects, my career has been a journey of passion, growth, and
            continuous learning. Here's a look at some of the milestones and
            experiences that have shaped my professional path. Each project has
            taught me invaluable lessons, pushing the boundaries of my knowledge
            and skills.
          </p>
        </div>

        {/* Resume Download Section */}
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1EAmGzqZ9xcYh2ZZULM5zj3M0QrwpdrUs/view"
          rel="noopener noreferrer"
          className="relative h-full w-full mt-5 sm:mt-0 lg:w-1/2"
        >
          <div className="relative flex justify-center">
            {/* Resume Preview Image */}
            <Image
              alt="resume"
              src="/images/resumeImg.png"
              width={200}
              height={200}
              className="relative h-80 w-64  rounded-xl  object-cover"
            />

            {/* Download Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 p-3 rounded-full bg-white/50 backdrop-blur-sm h-32 w-32 flex justify-center items-center self-center text-center dark:brightness-[0.8]">
              <Image
                alt="download Resume"
                src="/images/downloadresumeLoader.svg"
                width={20}
                height={20}
                className="h-32 w-32 text-slate-900/90 animate-spin-slow"
              />

              {/* Download Button */}
              <button
                className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#e8e8e8] duration-200 hover:bg-[#bfbfbf] dark:hover:bg-slate-300"
                aria-label="Download resume"
              >
                <Image
                  alt="download-2"
                  src="/images/downloadIcon.svg"
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] text-slate-600 dark:text-slate-400"
                />
              </button>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default GrowthChronicles;
