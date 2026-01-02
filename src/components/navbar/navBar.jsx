import React from "react";

function NavBar({ cartCount, onCartClick }) {
  return (
    <>
      <nav className="flex w-full justify-between bg-red-400 px-20 h-14">
        <div className="menu h-full flex">
          <ul className="flex h-full items-center space-x-10 text-white">
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                HOME
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                CONTACT
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                SERVICE
              </a>
            </li>
          </ul>
        </div>
        <div className="actions h-full flex items-center space-x-10 text-white">
          <button onClick={onCartClick} className='relative hover:bg-red-500 px-3 py-1 rounded'>
            cart {cartCount > 0 && <span className='absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center'>{cartCount}</span>}
          </button>
          <button className='hover:bg-red-500 px-3 py-1 rounded'>login</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
