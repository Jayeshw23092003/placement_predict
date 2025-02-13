import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ORIGIN } from "./Constants";
import { useNavigate } from "react-router-dom";

const url = ORIGIN+"/login"
function Login() {
  const Navigate = useNavigate();
  const [data, setData] = useState(
    {
      email : "",
      password : ""
    }
  )
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setData((prevData)=>({
      ...prevData, 
      [name] : value
    }))
  }

 

const SubmitData = async (e) => {
    e.preventDefault();  // Prevents default form submission
    console.log(data);
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: data.email, password: data.password })
        });
        if (!response.ok) {
            console.log("Error:", response.status);
            alert("Invalid Credentials");
            return;
        }
        const is_user = await response.json();
        console.log("Response Data:", is_user.user.actor);
        if (is_user.user.actor) {
            alert("To Profile")
            Navigate("/profile");
        } else {
            Navigate("/resume");
        }

    } catch (error) {
        console.error("Fetch error:", error);
        alert("Failed to connect to the server");
    }
};

  return (
    <div>
      <Header></Header>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <a
            href="#"
            class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="mr-2 h-8 w-8"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Login
          </a>
          <div class="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
            <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required=""
                  />
                </div>
                
               
                <button
                  type="submit"
                  onClick={SubmitData}
                  class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 ">
                  Don’t have an account yet?{" "}
                  <a
                    href="/registration"
                    class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Login;
