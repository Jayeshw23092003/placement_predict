import React from "react";

function Steps() {
  return (
    <div className="px-24">
      <section class="body-font text-gray-600">
        <div class="container mx-auto flex flex-wrap px-5 py-24">
          <div class="flex w-full flex-wrap">
            <div class="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
              <div class="relative flex pb-12">
                <div class="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  Student Registration 📝
                  </h2>
                  <p class="leading-relaxed">
                  Sign up and create your profile.
                  </p>
                </div>
              </div>
              <div class="relative flex pb-12">
                <div class="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  Resume & Data Submission 📄
                  </h2>
                  <p class="leading-relaxed">
                  Upload your resume and academic details.
                  </p>
                </div>
              </div>
              <div class="relative flex pb-12">
                <div class="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  Company Selection 🏢 
                  </h2>
                  <p class="leading-relaxed">
                  Choose the organization you're interested in.
                  </p>
                </div>
              </div>
              <div class="relative flex pb-12">
                <div class="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div class="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                  Data Processing ⚙️
                  </h2>
                  <p class="leading-relaxed">
                  AI analyzes your skills, academics, and resume.
                  </p>
                </div>
              </div>
              <div class="relative flex">
                <div class="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                    FINISH
                  </h2>
                  <p class="leading-relaxed">
                  Placement Prediction Result 🎯 – Get insights on job readiness and improvement areas.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="mt-12 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-3/5"
              src="./steps.avif"
              alt="step"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;
