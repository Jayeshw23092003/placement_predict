import React from "react";

function Hero() {
  return (
    <div>
      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-24">
          <div class="-mx-4 -mb-10 flex flex-wrap text-center">
            <div class="mb-10 px-4 sm:w-1/2">
              <div class="h-[22rem] overflow-hidden rounded-lg">
                <div class="pb-10 d-flex flex-row">
                  <div>
                    <span class="text-4xl mt-4 font-bold">CareerCatalyst</span>
                  </div>
                  {/* <div>
                    <img class = "h-10 ml-24 mb-2 " src="/pp.png" alt="" />
                  </div> */}
                </div>
                <p class = "mb-0 pb-0">
                  An advanced AI-powered placement prediction system designed to
                  analyze academic performance, skill sets, and industry trends
                  to provide highly accurate career insights. By leveraging
                  cutting-edge machine learning algorithms, CareerCatalyst evaluates
                  key factors such as grades, technical proficiency,
                  internships, and extracurricular achievements to generate
                  personalized job readiness recommendations. Our intelligent
                  system not only predicts placement probabilities but also
                  suggests areas for improvement, ensuring students enhance
                  their employability and secure the best opportunities. Whether
                  you're aiming for your dream job or looking to refine your
                  skills, CareerCatalyst empowers you with data-driven guidance for a
                  successful career journey. 🚀🎯
                </p>
              </div>
              
              <button class="mx-auto flex rounded border-0 bg-indigo-500 px-5 py-2 text-white hover:bg-indigo-600 focus:outline-none">
                Explore More
              </button>
            </div>
            <div class="mb-10 px-4  sm:w-1/2">
              <div class="h-full overflow-hidden rounded-lg">
                <img
                  alt="content"
                  class="h-[32rem] w-11/12 object-cover object-center"
                  src="./pp.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
