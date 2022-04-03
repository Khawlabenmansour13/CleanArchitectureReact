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
            class="p-4 py-6 text-white from-blue-500 to-blue-400 bg-gradient-to-r w-full h-100  md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
          >

            <div class="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">DoctorWise</a>
            </div>
            <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Health. Powered by DoctorWise.            </p>
            <p class="flex flex-col items-center justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <a href="#" class="underline">Get Started!</a>
            </p>
            <p class="mt-6 text-sm text-center text-gray-300">
              Read our <a href="#" class="underline">terms</a> and <a href="#" class="underline">conditions</a>
            </p>
          </div>
          <div class="p-5 bg-white md:flex-1">
            <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
            <form action="#" class="flex flex-col space-y-5">
              <div class="flex flex-col space-y-1">
                <label for="email" class="text-sm font-semibold text-left text-gray-500">Email address</label>
                <input
                  type="email"
                  id="email"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div class="flex flex-col space-y-1">
                <div class="flex items-center justify-between">
                  <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                  <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                </div>
                <input
                  type="password"
                  id="password"
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
              </div>
              <div>
              <button class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
    <span class="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="relative">Login</span>
</button>
              </div>
              <div class="flex flex-col space-y-5">
                <span class="flex items-center justify-center space-x-2">
                  <span class="h-px bg-gray-400 w-14"></span>
                  <span class="font-normal text-gray-500">or login with</span>
                  <span class="h-px bg-gray-400 w-14"></span>
                </span>
                <div class="flex flex-col space-y-4">
                <button
                                    class="flex items-center justify-center w-full px-4 py-2 text-sm text-white text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
                                    <svg 
                                        class="w-4 h-4 mr-2" viewBox="0 0 48 48">
                                        <defs>
                                            <path id="a"
                                                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                        </defs>
                                        <clipPath id="b">
                                            <use  overflow="visible" />
                                        </clipPath>
                                        <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                        <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                        <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                        <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                                    </svg>Sign in with Google
                                </button>
                   
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
