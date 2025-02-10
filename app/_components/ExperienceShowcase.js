import Image from "next/image";

const experiences = [
  {
    title: "Baidya Artworks",
    description:
      'Developed a responsive e-commerce website for art products, including SEO optimization, achieving top search rankings for "Baidya Artworks".',
    imageUrl: "/img/brands/baidyaart.png",
    link: "https://baidyaart.com",
  },
  {
    title: "Crew Time Sync",
    description:
      "Designed an application for cabin crew members to access global time zone information and coordination across various locations.",
    imageUrl: "/img/brands/cts.png",
    link: "https://crewtimesync.com",
  },
  {
    title: "Tech Revolvers",
    description:
      "Created a responsive website offering technological solutions, including web development, cybersecurity services, and SEO, catering to businesses and users.",
    imageUrl: "/img/brands/techrev.png",
    link: "https://techrevolvers.com",
  },
  {
    title: "Additional Knowledge",
    description:
      "Managed and written a WordPress blog website with over 170k+ views, sharing insights and information on web technologies, mobile applications, and various other topics.",
    imageUrl: "/img/brands/additionalknowledge.png",
    link: "https://additionalknowledge.com",
  },
  {
    title: "Webpack 5 Upgradation",
    description:
      "Authored a popular Medium blog on reducing chunk size by upgrading to Webpack 5, providing detailed analysis and insights on the improvements.",
    imageUrl: "/img/brands/webpack.png",
    link: "https://tech.oyorooms.com/migrating-to-webpack-5-to-improve-build-time-and-reduce-chunk-sizes-50486918d348",
  },
  {
    title: "WebOtp API Integration",
    description:
      "Wrote a well-received Medium blog on integrating the Web OTP API, explaining how websites can automatically read OTPs received on phones via carriers.",
    imageUrl: "/img/brands/webotp.png",
    link: "https://tech.oyorooms.com/implementing-automatic-sms-verification-for-websites-oyo-9375feba0749",
  },
];

const ExperienceShowcase = () => {
  return (
    <section
      id="showcase"
      className="container mx-auto py-16 sm:pt-24 lg:pt-28 dark:bg-trueGray-900 relative z-0"
    >
      <h1
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600 mb-16"
        style={{ lineHeight: 1.5 }}
      >
        Experience Showcase
      </h1>
      <div className="grid max-w-lg gap-8 mx-auto sm:mt-16 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:gap-x-6 xl:gap-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between mx-6 sm:mx-0 rounded-2xl bg-slate-50 shadow-sm shadow-emerald-100/50 ring-1 ring-slate-100 dark:bg-trueGray-800 dark:shadow-emerald-900/50 dark:ring-slate-900"
          >
            <div className="w-full px-4 pt-4">
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full overflow-hidden rounded-xl relative"
              >
                <Image
                  src={exp.imageUrl}
                  alt={exp.title}
                  width={100}
                  height={100}
                  className="w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/5 dark:ring-slate-100/5"></div>
              </a>
            </div>
            <div className="group relative flex flex-1 flex-col px-5 pb-10 pt-8 xl:px-7">
              <h3 className="mt-4 text-xl font-medium leading-normal text-slate-900 transition duration-200 ease-in-out group-hover:text-emerald-900 dark:text-slate-100 dark:group-hover:text-emerald-300">
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  {exp.title}
                </a>
              </h3>
              <p className="mt-3.5 text-md leading-7 text-slate-700 dark:text-slate-300">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceShowcase;
