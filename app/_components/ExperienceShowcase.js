import Image from "next/image";

const experiences = [
  {
    title: "Airbnb Clone",
    description:
      "Developed  Airbnb clone for short-term rentals, featuring dynamic search, user authentication, and SEO optimization, achieving high search rankings for listed properties.",
    imageUrl: "/images/p_airbnb_test.PNG",
    link: "https://airbeenb.netlify.app/",
  },
  {
    title: "Weston Properties",
    description:
      "Developed a responsive real estate platform for Weston Properties, enabling seamless property listings, advanced search, and optimized SEO for better visibility..",
    imageUrl: "/images/p_weston_test.PNG",
    link: "https://real-estate-properties.netlify.app/",
  },
  {
    title: "Tech Revolvers",
    description:
      "Created a responsive website offering technological solutions, including web development, cybersecurity services, and SEO, catering to businesses and users.",
    imageUrl: "/images/p_cryptoXchange.PNG",
    link: "https://cryptoaxchange.netlify.app/",
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
            className="flex flex-col items-start justify-between mx-6 sm:mx-0 rounded-2xl  ring-1  bg-[rgb(38,38,38)] dark:shadow-emerald-900/50 dark:ring-slate-900"
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
                  width={600} // Set this to match your original image width
                  height={400} // Set this to match your original image height
                  layout="responsive"
                  className="w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/5 dark:ring-slate-100/5"></div>
              </a>
            </div>
            <div className="group relative flex flex-1 flex-col px-5 pb-10 pt-8 xl:px-7">
              <div className="flex-1">
                <h3 className="mt-4 text-xl font-medium leading-normal text-slate-900 transition duration-200 ease-in-out group-hover:text-emerald-900 dark:text-slate-100 dark:group-hover:text-emerald-300">
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.title}
                  </a>
                </h3>
                <p className="mt-3.5 text-md leading-7  dark:text-slate-300">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceShowcase;
