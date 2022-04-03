import React, { useState } from "react";
export default function SignIn() {
  const [showpass, setShowPass] = useState(false)
  return (
    <>
      <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div
          class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
        >
          <div
            class="p-4 py-6 text-white from-blue-600 to-blue-900 bg-gradient-to-r w-full h-100  md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
          >

            <div class="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">DoctorWise</a>
            </div>
            <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Health. Powered by DoctorWise.            </p>
            <p class="flex flex-col items-center justify-center mt-10 text-center">
              <span>You are already have an account?</span>
              <a href="#" class="underline">Sign In!</a>
            </p>
            <p class="mt-6 text-sm text-center text-gray-300">
              Read our <a href="#" class="underline">terms</a> and <a href="#" class="underline">conditions</a>
            </p>
          </div>
          <div class="p-5 bg-white md:flex-1">
            <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Register</h3>
            <form action="#" class="flex flex-col space-y-5">
              <div class="flex flex-col space-y-1">
                <label for="email" class="text-sm font-semibold text-gray-500">Username</label>
                <input
                  type="email"
                  id="email"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div class="flex flex-col space-y-1">
                  <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                <input
                  type="password"
                  id="password"
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              
              
              <div class="flex flex-col space-y-1">
                <label for="confirmpass" class="text-sm font-semibold text-gray-500">Confirm Password</label>
                <input
                  type="password"
                  id="confirmpass"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

                  
              <div class="flex flex-col space-y-1">
                <label for="phone" class="text-sm font-semibold text-gray-500">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              
                            <div>
              
                   <button class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
    <span class="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="relative">Register</span>
</button>
                  
              </div>
              
              <div class="flex flex-col space-y-5">
               
              </div>
           
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
