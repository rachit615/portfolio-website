"use client";

import Image from "next/image";

const technologies = [
  { name: "React", src: "/images/tech/react.png" },
  { name: "Next.JS", src: "/images/tech/next.png" },
  { name: "JavaScript", src: "/images/tech/js.png" },
  { name: "Webpack", src: "/images/tech/webpack.png" },
  { name: "CSS", src: "/images/tech/css.png" },
  { name: "Tailwind", src: "/images/tech/tailwind.png" },
  { name: "HTML", src: "/images/tech/html.png" },
];

export default function CoreTechnologies() {
  return (
    <section
      id="technologies"
      className="relative z-0 dark:bg-trueGray-900 py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-transparent mb-16 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Core Technologies
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <div className="lg:order-2 mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-display text-4xl font-semibold text-slate-900 dark:text-slate-100 sm:text-5xl">
              A simple stack that you can
              <span className="relative text-emerald-700 ml-2">
                always trust
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              I've been a software developer for over 2.5 years, and while my
              stack has shifted over the years, I kept coming back to the same
              technologies. The following is the stack that I've developed &
              honed over the years as a software developer.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="overflow-hidden rounded-lg bg-slate-50 dark:bg-gray-800 px-4 py-6 ring-1 ring-slate-900/5 sm:px-6"
                >
                  <div className="flex gap-4 sm:gap-6">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm shadow-emerald-100/75 ring-1 ring-slate-100/95 sm:h-11 sm:w-11">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={22}
                        height={22}
                        className="h-auto w-5 shrink-0 sm:w-[22px]"
                      />
                    </div>
                    <div className="overflow-hidden flex items-center">
                      <p className="font-display text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl pb-24 lg:order-1 lg:mx-0 lg:max-w-none">
            <div className="relative mx-auto w-full max-w-lg lg:ml-0 lg:mr-auto">
              <div className="aspect-h-7 aspect-w-5">
                <Image
                  src="/_next/static/media/client.775c3373.jpg"
                  alt="Mayank Khanna"
                  width={1411}
                  height={1058}
                  className="h-full w-full rounded-2xl object-cover object-left"
                />
              </div>
              <div className="absolute -bottom-16 right-6 max-w-xs rounded-2xl bg-emerald-700/95 p-8 backdrop-blur-sm xl:bottom-10 xl:translate-x-1/4">
                <p className="font-display text-2xl font-medium text-emerald-50">
                  <span className="text-[28px] font-bold text-white">50+</span>
                  &nbsp;Clients have loved my work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
