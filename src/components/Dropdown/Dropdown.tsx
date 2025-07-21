'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/utils/cn';

import arrowUp from '../../../public/assets/icons/icon-arrow-up.svg';
import arrowDown from '../../../public/assets/icons/icon-arrow-down.svg';
import checkMark from '../../../public/assets/icons/icon-check.svg';

const options = [
  { label: 'Most Upvotes', value: 'most-upvotes' },
  { label: 'Least Upvotes', value: 'least-upvotes' },
  { label: 'Most Comments', value: 'most-comments' },
  { label: 'Least Comments', value: 'least-comments' },
];

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: (typeof options)[0]) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={cn(
          'flex items-center gap-4 w-64 px-4 py-2 bg-comment-stat rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer text-white hover:text-inherit'
        )}
      >
        <span>
          Sort by :{' '}
          <span className="font-semibold">{selectedOption.label}</span>
        </span>
        {isOpen ? (
          <Image
            src={arrowUp}
            alt="Chevron Up"
            width={14}
            height={14}
            className="text-white"
          />
        ) : (
          <Image
            src={arrowDown}
            alt="Chevron Down"
            width={14}
            height={14}
            className="text-white"
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-64 mt-6 bg-white rounded-xl shadow-lg">
          <ul className="py-2">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="flex items-center justify-between px-4 py-2 cursor-pointer hover:text-primary border-b border-main-border-fade last:border-b-0"
              >
                {option.label}
                {selectedOption.value === option.value && (
                  <Image
                    src={checkMark}
                    width={14}
                    height={14}
                    alt="check icon"
                    className="color-primary"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
