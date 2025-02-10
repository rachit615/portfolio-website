import Image from "next/image";

const experiences = [
  {
    company: "Ciphernutz IT Services",
    role: "Software Development Engineer",
    duration: "Jan 2024 - Present",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEVHcEwNs9cSm80TMEwLvNsRoM8PKUgWicUQqNISn88Mt9kVjMYTMEwVj8gRoM8Or9YTMEwTMEze4eQWi8YOrNQTMEz////Cx8wSL0wLutoKwd3///8Ns9cPq9QAFjwVjscQo9ASm80Ulcrc3+IXhMPJzdLS1dkAAjEAIkKssrosQlmCjJhYZndkcYC6tPT9AAAAGHRSTlMA5GK7yKfX/R42fMpBhYhTe1y9dXOORO3rjeAGAAABcElEQVQ4jW2Ta3uCMAyFC3IV522bFspFAS3o9v//3poQ2zDpF+E5rzkhPRGCn2S3DcNw6ydi8ay9qqoul8v1em0/FuSyrBzQviFeWSJhgSbmRkmeW30CmqaJU65PQOinSeqHWKGJXY28QODL/sPHCnFPr0EBFTx83hw2+JsBQB4p6HkAaiTNGc4nJDJhC4CDeVhJPPVdHc3bp+2wACAFfRgIuEd8QgAYg718jL/1BHT1twPQYSeErG9KPTUB0gHoIMQBATVqAvYzwIMOEFA3PQEr3mNhWogA6DqlOo1AxIHcAkYEigNgUbwsulqfwYdbzJo0gh4nwDXJP9MIUj+VuvPPXAMAgyJA1j/jQ7JBJXgVZtQRATBxPmoRYFzMw5EAiR3ayxIpAnDdpyPeVgSRyOKMlzB5+h+YuO9tKCmRLHIYuP4VORNayjSFlhLZu+AnJVubtiXAxV7A4sy2ZhZ6mpddmwlY2k7PVViQsZX39f8DC7Q6QvAqA74AAAAASUVORK5CYII=",
    highlights: [
      "Working on Saas based product that manages Saas and procurement, streamlines software buying and renewals.",
      "Developed custom reusable components such as Tooltip, Charts, Progress Bars, etc., which led to a significant increase in performance, reducing load times by 40% enhancing user experience",
      "Improved data rendering performance by implementing virtualization in table, reducing load times by over 75% resulting in enhanced user experience",
      "Designed and developed workflow templates, implementing key features to streamline processes and enhance functionality",
    ],
  },
  {
    company: "Declone Labs Pvt Ltd",
    role: "Senior Software Development Engineer",
    duration: "May 2023 - Dec 2023",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAAAAACjPZBQAAABP0lEQVR4AZzSIWzCQBSH8c+LmTncZM0MDrcg685Xo+oTzBT1pj4NCldZh6s8V3WypsnJE03O/BcgsOQAluxzL/mZ9/LQHyXgUI2bF2BcU03snoIaToAnYHjnF3h/Byqg/2I3QZR6QgIOUEtrvq/AJGBtgs7Aw3wCJGCQXoFr+RnEM4gPwLhg66F5BnZApzdYWAtzCjqgiGOrBsjuQQFvVlv4HKOBO9BBrZZzpew9KPLgMqD1BjioToFTCWxmSf0CPpxPtrAAR11qgTI91BHgcJ3coBRINZANr14ulEA5PweSM8CUgKRZeg30H+D6Qbe6B6DYVu9BdpKsjysFqzjaIB3jFTh19W5fDJuqDPmY7VeBPVr2WbyBqvtsWocUzb4VfqMPx7GZLqA0661sbtQul7NRvmx8qdVc/yyyjRhfAACgWxkLGcFdsAAAAABJRU5ErkJggg==",
    highlights: [
      "Developed diriyah.sa website a prominent platform that showcases the heritage and cultural richness of Diriyah.",
      "Integrated APIs and services to enhance the website's functionality and provide additional features. Enhanced SEO with Next.js through server-side rendering, improving search engine visibility and boosting organic traffic.",
    ],
  },

  {
    company: "HashedIn by Deloitte",
    role: "Web Development Intern",
    duration: "Aug 2022 - Feb 2023",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA+0lEQVR4AWJwL/AZUEwXSz7WKQDaLxcTiEEYDPPGDW6BDtFFXKJ7OIebOIAbZAiBm8ALEOH4MSKFhEcLfBRUko80thqYw00AkkemC40J3gIdyJYCmPwzESjeFWggcHkLBKYwBMlFQEqF7JQXCLtCM4EKZaIbzXXNul/ZFTRExmCBYPWOAJS9KwLnaEZLgeNvPMo45iJTAZxjTshjJYD7H7EX0GIi0UoAG460T7G1gBY7qgJAW2MvsOYJAt8VBgJmTfgKvALVT0A/kmcmjbWeAlVi4WEkegoU+E1PBaqRwDXmmIMh7RUkqUKWZ9oQIKYKxERlXQbR8wmX031+opNMsEMPQkAAAAAASUVORK5CYII=",
    highlights: [
      "Worked on a project based on logging and monitoring of application in any environment such as containerized, cluster or bare metal.",
      "Developed a logging and monitoring utility mode to analyze the logs and metrics effectively.",
    ],
  },
  {
    company: "Refactor Academy",
    role: "Intern - Web",
    duration: "Jan 2023 - April 2023",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAe1BMVEVHcEzg4ODY2Njl5eXs7OygoKDu7u709fTu7uvy8vLl5eXNzc3Ly8vm5ubO+/3/////kU36/PxfHI3L/P7p/f7/iTra/P7/jkZzRJiPcqrY2dXh5OH/6Nz7iDz3r4X+waDMxtH+pXKijbXAssyAWp/71L7m1MG1pcOUd60/kSWfAAAADnRSTlMAYlR0mBqz/v3NgT5qbCrkQEUAAAG/SURBVDiNZZPrYoIwDIVxOoq7UNICRZCbotv7P+FO0ovbPPsxab6kJ2mbZUm7nGotOu5fsycdCJG29ISm/B/ywmGqSxsJTW9/0rFSt9aWEAdtyxs94kestRItpUZtrYWdIsZzXiqjkCv/21Rjn+I27iAfIHKOv1KI27auLWmKPO/y4g2U4ZtqRSysMAJaoQC6lwQE+iu0KCba0NEOHVKgiU6G1Q2KfFUUPWYK4/P1lfo23baBUCAkDT6z4ADeVXEyXd9fjFm4hOQxwCgbjsBizBcDYT2Tniw9A5r3SICOwDDwFgWFebYMxBNiwHSdMVuh/NkHwP4GoK1/Bh5bLJs5DR4ogwfC2Q5FMgkLg1hIXej7VDVrAtDEVYDbvbToDpOcmqpqVGqzM988Se0aN/UY1EGfAbg1tYl5s4fZIW3GWeA0V/9bKQGuPGp9Q1ZVyYXIpQQIUtfLV1EMl8tCEm9uci1xo2b+HNdC+T9VTCMW3KT1u7woLT4rN053jt6n0VViSx/SqxACCNSMnI7O6fEyQMwNZyU5mP79ct60Pq8PxDXrOdz5qHcFZHaNqJoRpt2/1/2J49DqzOKD8PY+suwHv5k8FMpktD0AAAAASUVORK5CYII=",
    highlights: [
      "Learned the fundamentals of web development, including HTML, CSS, and JavaScript.",
      "Developed projects using React, Next.js, and Tailwind CSS.",
    ],
  },
];

const Experiences = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        My Experiences
      </h2>

      <ol className="relative border-l border-[#03986a]">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-10 ml-9">
            <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-5">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-black"
              />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {exp.company}
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">
              {exp.duration}
            </time>
            <div className="mb-4 text-base text-gray-500 dark:text-gray-400">
              <ul className="list-disc pl-5">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experiences;
