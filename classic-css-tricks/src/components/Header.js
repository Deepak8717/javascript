import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Header = ({ count, handleClick, handlePreviousClick }) => {
  return (
    <header>
      <h1>Classic CSS-Tricks!</h1>
      <aside>
        {count > 1 && (
          <button onClick={handlePreviousClick}>
            <FaChevronLeft />
          </button>
        )}
        <button onClick={handleClick}>
          <FaChevronRight />
        </button>
      </aside>
    </header>
  );
};

export default Header;
