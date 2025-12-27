import React from "react";

function NavBar() {
  return (
    <>
      <nav className="flex w-full justify-between bg-red-400 px-20 h-14">
        <div className="menu h-full flex">
          <ul className="flex h-full items-center space-x-10 text-white">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                HOME
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                ABOUT
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                CONTACT
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                SERVICE
              </a>
            </li>
          </ul>
        </div>
        <div className="actions h-full flex items-center space-x-10 text-white">
          <button>cart</button>
          <button>login</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
