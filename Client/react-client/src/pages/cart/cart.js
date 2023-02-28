import React, { useState } from "react";

export default function Cart() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
   
  return (
    <div>
      <button
        onClick={()=>setdropdownOpen(!dropdownOpen)}
        class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
      >
        Dropdown
        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      {dropdownOpen && (
        <div class="bg-white text-base absolute z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
          <ul class="py-1">
            <li>
              <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                Settings
              </a>
            </li>
            <li>
              <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                Earnings
              </a>
            </li>
          </ul>
          <div class="py-1">
            <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
