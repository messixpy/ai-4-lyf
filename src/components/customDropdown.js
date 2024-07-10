import React, { useState } from 'react';

const CustomDropdown = ({ value, onChange, option, option1, option2, option3,option4 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (newValue) => {
    onChange({ target: { value: newValue } });
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownActionButton"
        data-dropdown-toggle="dropdownAction"
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 "
        type="button"
        onClick={handleToggle}
      >
        <span className="sr-only">Action button</span>
        {option}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownAction"
          className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
        >
          <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButton">
            <li>
              <button
                onClick={() => handleOptionClick('All')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 "
              >
                {option}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick(option1)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 "
              >
                {option1}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick(option2)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {option2}
              </button>
            </li>
            {option3 && (
              <li>
                <button
                  onClick={() => handleOptionClick(option3)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100  "
                >
                  {option3}
                </button>
              </li>
            )}
            {option4 && (
              <li>
                <hr className='text-white w-full ' />
                <button
                  onClick={() => handleOptionClick(option3)}
                  className="block w-full !font-medium !text-red-500 text-left px-4 py-2 hover:bg-gray-100  "
                >
                  {option4}
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
