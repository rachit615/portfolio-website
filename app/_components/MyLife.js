import Image from "next/image";

const hobbies = [
  {
    title: "Motorcycling",
    category: "Adventure",
    description:
      "Motorcycling is more than just a hobby, it is my gateway to adventure and freedom. Every ride allows me to break away from the routine, explore new landscapes and meet fascinating people.",
    image: "/images/hobbies/motorcycling.jpeg",
  },
  {
    title: "Go Karting",
    category: "Recreational Activities",
    description:
      "The thrill of speed, the sharp turns, and the rush of racing make it the perfect way for me to unwind and channel my love for excitement.",
    image: "/images/hobbies/gokarting.jpeg",
  },

  {
    title: "Beach Day",
    category: "Recreational Activities",
    description:
      "A day at the beach is my perfect way to relax and recharge. Whether it's the soothing sound of waves, the warmth of the sun, or the thrill of water sports, it’s a place where I connect with nature and find peace.",
    image: "/images/hobbies/beach.jpeg",
  },
  {
    title: "Amusement Park Visit",
    category: "Recreational Activities",
    description:
      "A visit to Wonderla is my perfect escape for a day of adventure and excitement. From thrilling rides to water attractions, it's a place where I can unwind and embrace the joy of fun-filled experiences.",
    image: "/images/hobbies/wonderla.jpeg",
  },

  {
    title: "Swimming",
    category: "Health & Fitness",
    description:
      "Cycling is my way of staying connected with both nature and fitness. Each ride allows me to explore new paths and enjoy the fresh air, all while embracing the simplicity and joy of being outdoors.",
    image: "/images/hobbies/swimming.PNG",
  },
  {
    title: "Gym",
    category: "Health & Fitness",
    description:
      "The gym is my sanctuary for self-improvement, where I build not just physical strength but also mental resilience. My time at the gym is essential for maintaining a balanced, healthy lifestyle.",
    image: "/images/hobbies/gym.jpeg",
  },

  {
    title: "Hiking",
    category: "Recreational Activities",
    description:
      "Hiking is my way of challenging myself physically while immersing in the beauty of nature. Each trail is a journey that pushes my limits and offers breathtaking views.",
    image: "/images/hobbies/hiking.PNG",
  },
];

const MyLife = () => {
  return (
    <section
      id="life"
      className="py-16 sm:py-24 lg:pt-32  dark:bg-trueGray-900 relative z-0"
    >
      <div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-transparent mb-16 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Life Unplugged
          </h1>
          <p className="mx-auto mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
            Outside the realm of coding, I immerse myself in activities that
            fuel my creativity and keep my spirit alive. Whether it's hiking
            through nature trails, diving into a gripping novel, or
            experimenting with new recipes in the kitchen, these hobbies add a
            vibrant balance to my life. They not only recharge me but also
            inspire innovative ideas in my professional projects.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-lg columns-1 gap-6 space-y-6 sm:mt-16 sm:max-w-2xl sm:columns-2  xl:gap-8 xl:space-y-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full snap-center break-inside-avoid-column rounded-xl relative shadow-sm shadow-emerald-100/50 dark:shadow-none"
            >
              <div className="w-full h-[50%] absolute bottom-0 right-0 bg-gradient-to-b from-white/0 via-black/70 to-black/80 rounded-xl z-10"></div>
              <div className="z-10 bottom-3 left-4 absolute text-xl font-medium text-slate-200 lg:text-xl">
                <div className="text-base text-[#03986b] font-medium">
                  {hobby.category}
                </div>
                {hobby.title}
                <div className="mt-2 text-sm text-slate-300 font-light w-[calc(100%-16px)]">
                  {hobby.description}
                </div>
              </div>
              <Image
                src={hobby.image}
                alt={hobby.title}
                width={800}
                height={1000}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyLife;
