import React from "react";

function Skills() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute bg-gray-700 -z-50 inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: 'url(./images/wallpaper2.jpg)', opacity: 0.3 }}
      />
      <div className="md:grid grid-rows-2 md:grid-flow-col gap-x-36 gap-y-10 px-16 pt-10 relative z-100">
        <div className="row-span-3 col-span-4">
          <h3 className="font-bold text-3xl border-b-2 border-sky-600 pb-2 tracking-wider">
            SOFTWARE SKILLS
          </h3>
          <ul className="pt-4 list-disc list-inside font-light text-lg tracking-wide">
            <li className="py-2">Java</li>
            <li className="py-2">Spring Framework</li>
            <li className="py-2">PHP</li>
            <li className="py-2">Laravel</li>
            <li className="py-2">HTML & CSS</li>
            <li className="py-2">Tailwind CSS</li>
            <li className="py-2">Bootstrap</li>
            <li className="py-2">SQL (Database Management)</li>
            <li className="py-2">React.js</li>
            <li className="py-2">Python</li>
            <li className="py-2">JavaScript</li>
            <li className="py-2">Git & GitHub</li>
          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="font-bold text-3xl border-b-2 border-sky-600 pb-2 tracking-wider">
            LANGUAGES
          </h3>
          <div className="flex flex-row pt-6 items-center">
            <p className="font-base text-lg tracking-wide w-20">Albanian</p>
            <input
              type="range"
              className="w-1/3 h-1 appearance-none rounded-sm bg-sky-600 mx-4"
              value="100"
              max="100"
              disabled
            />
          </div>

          <div className="flex flex-row pt-12 items-center">
            <p className="font-base text-lg tracking-wide w-20">Italian</p>
            <input
              type="range"
              className="w-1/3 h-1 appearance-none rounded-sm bg-sky-600 mx-4"
              value="80"
              max="100"
              disabled
            />
          </div>

          <div className="flex flex-row pt-12 items-center">
            <p className="font-base text-lg tracking-wide w-20">English</p>
            <input
              type="range"
              className="w-1/3 h-1 appearance-none rounded-sm bg-sky-600 mx-4"
              value="90"
              max="100"
              disabled
            />
          </div>
        </div>

        <div className="row-span-2 col-span-2 mt-10">
          <h3 className="font-bold text-3xl border-b-2 border-sky-600 pb-2 tracking-wider uppercase">
            Education and Experience
          </h3>
          <p className="whitespace-normal tracking-wide text-lg mt-6">
            I am currently pursuing a Bachelor's degree in Software Engineering at Epoka University.<br/>
            I began my studies in 2022 and am on track to graduate in 2025.<br/> 
            Throughout my academic journey, I have been building a strong foundation in software development, problem-solving, 
            and innovative technologies, with a focus on preparing for a dynamic career in the tech industry.
          </p>

          <div className="flex flex-row items-center gap-x-6">
            <p className="whitespace-normal tracking-wide text-lg mt-6 border-b-2 inline-block">
              Have a look at some of my projects on GitHub
            </p>
            <a 
              href="https://github.com/rberberi1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-lg hover:underline"
            >
              <img className="w-8 mt-6" src="./images/icons8-github-48.png" alt="GitHub logo"/>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex justify-start px-16 pb-8">
        <ul className="flex flex-col md:flex-row space-x-4 items-center">
          <li className="flex items-center mb-4 md:mb-0">
            <a 
              href="https://github.com/rberberi1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-lg hover:underline"
            >
              <img className="w-8 mr-2" src="./images/icons8-github-48.png" alt="GitHub logo" />GitHub
            </a>
          </li>
          <li className="flex items-center">
            <a 
              href="https://www.linkedin.com/in/rosela-berberi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-lg hover:underline"
            >
              <img className="w-8 mr-2 md:ml-14" src="./images/icons8-linkedin-24.png" alt="LinkedIn logo" />LinkedIn
            </a>
          </li>
          <li className="flex items-center">
            <img className="w-8 mr-2 md:ml-14" src="./images/icons8-gmail-50.png" alt="Email logo" />roselaberberi123@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
