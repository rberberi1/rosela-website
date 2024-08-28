import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState('Home');

  return (
    <div className="bg-gray-800 flex flex-col md:flex-row items-center justify-between px-16 py-8">
      <ul className="font-semibold flex flex-col md:flex-row items-center justify-between">
        <li >
          <Link
            to="/"
            className={` transition ease-in-out  ${active === 'Home' ? 'text-sky-600' : 'text-white hover:text-gray-200 hover:underline'}`}
            onClick={() => setActive('Home')}
          >
            Home
          </Link>
        </li>
        <li className="md:ml-16 mt-3 md:mt-0 ">
          <Link
            to="/skills"
            className={` transition ease-in-out ${active === 'Skills' ? 'text-sky-600' : 'text-white hover:text-gray-200 hover:underline'}`}
            onClick={() => setActive('Skills')}
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
