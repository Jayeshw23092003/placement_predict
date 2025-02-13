import React from "react";

function Header() {
  return (
    <div class="pl-24 pt-10">
      <header class="body-font text-gray-600">
        <div class="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <a class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <img class = "h-5" src="/pp.png" alt="" />
            <span class="ml-3 text-xs text-gray-700">CareerCatalyst </span>
          </a>
          <nav class="flex flex-wrap items-center justify-center text-base md:ml-4	md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4">
            <a href = "/" class="mr-5 hover:text-gray-900">Home</a>
            <a href = "/about" class="mr-5 hover:text-gray-900">About</a>
            <a href = "/contact" class="mr-5 hover:text-gray-900">Contact Us</a>
            <a href = "/registration" class="mr-5 hover:text-gray-900">Register</a>
          </nav>
          
        </div>
      </header>
    </div>
  );
}

export default Header;
