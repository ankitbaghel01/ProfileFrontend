import React from 'react';
import { LuSend } from "react-icons/lu";
import './ContectButton.css';

const ContectButton = ({ text }) => {
  return (
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
      <span className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        <span>Contect Us</span>
        <LuSend className="ml-1" />
      </span>
          </button>
  );
}

export default ContectButton;
