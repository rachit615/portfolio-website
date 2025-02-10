import Image from "next/image";

const WhyMe = () => {
  return (
    <section
      id="whyme"
      className="relative z-0 py-16 sm:py-24 lg:py-32  dark:bg-trueGray-900"
    >
      <div className="container mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1
            className="text-transparent mb-16 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
            style={{
              lineHeight: "1.5",
              transform: "translateY(38.934px) translateZ(0px)",
            }}
          >
            Why me?
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            I'm your all-in-one project solution
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Embarking on a new project can be daunting. Whether you're looking
            to revamp your website, optimize user experience, or dive into a
            fresh digital initiative, I'm here to lend a hand. I specialize in
            delivering comprehensive solutions tailored to your unique needs.
            Let's collaborate to bring your ideas to fruition—whether it's
            building from scratch or enhancing existing frameworks. Your project
            deserves attention to detail and a passion for innovation—
            <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
              let's make it happen together
            </mark>
            .
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              imgSrc: "/images/web-development.svg",
              title: "Web Development",
              description:
                "Create robust, scalable web applications from scratch, using the latest technologies to ensure top-notch performance and reliability.",
            },
            {
              imgSrc: "/images/ux-design.svg",
              title: "UX Design",
              description:
                "Enhance user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with your product.",
            },
            {
              imgSrc: "/images/digital-strategy.svg",
              title: "Digital Strategy",
              description:
                "Develop a comprehensive digital strategy to ensure your projects are aligned with your business goals and achieve maximum impact.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              tabIndex={0}
            >
              <div className="flex items-center">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  width={64}
                  height={64}
                />
                <h3 className="ml-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
              </div>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Skills */}
      <div className="container p-8 mx-auto mt-10 block lg:hidden">
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted <span className="text-[#03986a]">Innovator</span> in
            Crafting Modern, Scalable Technology Solutions
          </div>
          <div className="flex flex-wrap justify-around items-baseline gap-5 mt-10">
            {[
              {
                imgSrc: "/img/skills/projectsetup.svg",
                label: "Project setup",
              },
              { imgSrc: "/img/skills/design.svg", label: "Design" },
              { imgSrc: "/img/skills/coding.svg", label: "Coding & SEO" },
              { imgSrc: "/img/skills/innovation.svg", label: "Innovation" },
              { imgSrc: "/img/skills/perf.svg", label: "Performance" },
              { imgSrc: "/img/skills/analytics.svg", label: "Analytics" },
              { imgSrc: "/img/skills/maintainance.svg", label: "Maintenance" },
            ].map((skill, index) => (
              <div
                key={index}
                className="text-gray-400 dark:text-gray-400 flex flex-col justify-center items-center hover:scale-105 transition-all ease-linear"
              >
                <Image
                  src={skill.imgSrc}
                  alt={skill.label}
                  width={80}
                  height={80}
                  className="drop-shadow-md animate-wiggle"
                />
                <div className="uppercase text-xs mt-2">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
