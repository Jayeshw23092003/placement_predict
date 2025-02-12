import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { ORIGIN } from "./Constants.js";
import { content } from "flowbite-react/tailwind";

function Registration() {
  const [data, setData] = useState({
    full_name: "",
    email: "",
    password: "",
    repeat_password: "",
    actor : true
  });
 

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setData((prevData) => ({
      ...prevData,
      [name]: value, 
      actor: value === "student" ? false : true, 
    }));
  };

  const register = async (event) => {
    event.preventDefault();
    const actor = document.getElementsByClassName("default-radio");

    // Determine if the user is a student
    let is_student = Array.from(actor).some(i => i.checked && i.value === "student");

    // Use local variable to avoid async state update issue
    const updatedData = { 
        ...data, 
        actor: !is_student 
    };

    console.log("Is Student:", is_student);
    console.log("Before Sending:", updatedData); // Ensure latest state

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": ""
            },
            body: JSON.stringify(updatedData),
        });
        const json_response = await response.json();
        if (json_response.status === 200) {
            Navigate("/login");
        } else {
            alert("Some internal issue has occurred");
        }
    } catch (error) {
        console.error("Error during fetch:", error);
        alert("Failed to connect to the server");
    }
};


  const Navigate = useNavigate();

  const SubmitData = (e) => {
    e.preventDefault();
    register();

  };

  return (
    <div>
      <Header></Header>
      <div class="pt-24">
        <h1 class="text-center text-2xl font-bold">Register Here</h1>
      </div>
      <form class="mx-auto max-w-md">
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="full_name"
            name="full_name"
            id="full_name"
            value={data.full_name}
            onChange={handleChange}
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
            placeholder=""
            required
          />
          <label
            for="Full_Name"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Full Name
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Email address
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="password"
            name="password"
            value={data.password}
            id="password"
            onChange={handleChange}
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Password
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="password"
            name="repeat_password"
            id="repeat_password"
            value={data.repeat_password}
            onChange={handleChange}
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Confirm password
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="group relative z-0 mb-5 w-full">
            <input
              type="tel"
              value={data.contact}
              pattern="[0-9]{10}"
              onChange={handleChange}
              name="contact"
              id="contact"
              class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div class="group relative z-0 mb-5 w-full">
            <div class="mb-4 flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                onChange={handleChange}
                value="student"
                name="default-radio"
                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                for="default-radio-1"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Student
              </label>
            </div>
            <div class="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value="admin"
                onChange={handleChange}
                name="default-radio"
                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                for="default-radio-2"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Admin
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={SubmitData}
          class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <p class="pt-4 text-center text-sm font-light text-gray-500 dark:text-gray-400 ">
        Have an account?{" "}
        <a
          href="/login"
          class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
        >
          Login Here
        </a>
      </p>
      <Footer></Footer>
    </div>
  );
}

export default Registration;
