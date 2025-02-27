import { useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "context/AuthContext";
import BtnApple from "@Buttons/BtnApple";
import BtnFb from "@Buttons/BtnFb";
import BtnGoogle from "@Buttons/BtnGoogle";
import BtnMM from "@Buttons/BtnMM";
import BtnOW from "@Buttons/BtnOW";
import HrSpace from "@components/HrSpace";
import AlertPage from "commons/AlertPage";

const navigation = "/";
export default function LoginPage() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signin, error, setError } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  };
  return (
    <>
      <section className="bg-gradient-to-r from-black to-gradientblack">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-stone-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-400 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="flex flex-col xl:flex-row">
                <BtnGoogle />
                <BtnApple />
                <BtnFb />
              </div>

              <HrSpace />
              <div className="flex flex-col">
                <BtnMM />
                <BtnOW />
              </div>

              <HrSpace />
              
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required={true}
                    ref={emailRef}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                    ref={passwordRef}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    href={navigation}
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button className="cursor-pointer border-hidden w-full text-dark bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Login
                </button>
               
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href={navigation}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              {error && <AlertPage />}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
