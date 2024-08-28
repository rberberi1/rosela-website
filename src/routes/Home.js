import React from "react";

function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute -z-50 inset-0 bg-cover bg-center bg-gray-700"
        style={{ backgroundImage: 'url(./images/wallpaper.png)', opacity: 0.3 }}
      />

      <div className="relative z-1000 mx-16 my-auto">
        <div className="container md:w-1/3">
          <p className="text-6xl font-bold text-center tracking-wide">Rosela Berberi</p>
          <p className="text-center my-3 animate-pulse text-base tracking-widest">Future Software Engineer</p>
          <hr className="border-sky-600 border-2"/>
          <p className="text-center mt-8 text-lg tracking-wide">
            Passionate about solving complex problems through innovative coding solutions, I’m always on the lookout for new challenges that push me to think creatively and expand my skills.
            Whether it’s building cool projects from the ground up or tackling tricky issues in existing systems, I’m eager to roll up my sleeves and dive in.
            As I continue my journey into the world of software development, I’m committed to learning, experimenting, and evolving with each new experience.
          </p>
        </div>

        <div className="container flex md:w-1/3 mt-20 items-center">
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
              <img className="w-8 mr-2 md:ml-14" src="./images/icons8-gmail-50.png" alt="Email logo" />
              roselaberberi123@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
