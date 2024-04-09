"use client";
import React, { useEffect } from "react";
import tracking from "@/assets/images/track-spending.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/images/logo-white.jpg";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const { Validation, Input, initTE } = await import("tw-elements");
      initTE({ Validation, Input }, { allowReinits: true });
    };
    init();
  }, []);
  return (
    <div className="g-0 lg:flex lg:flex-wrap h-full w-full">
      {/* <!-- Left column container--> */}
      <div className="px-4 md:px-0 w-full lg:w-6/12">
        <div className="md:mx-auto md:p-12 flex flex-col justify-center md:w-5/6 h-full">
          {/* <!--Logo--> */}
          <div className="text-center">
            <h4 className="mb-12 md:6 md:mt-1 pb-1 text-xl font-semibold">
              Welcome back!
            </h4>
          </div>

          <form data-te-validation-init data-te-active-validation="true">
            <p className="mb-4">Please login to your account</p>
            {/* <!--Username input--> */}
            <div
              className="relative mb-4"
              data-te-input-wrapper-init
              data-te-validate="input"
              data-te-validation-ruleset="isRequired|isEmail"
              data-te-invalid-feedback="The email address is invalid"
              data-te-valid-feedback="The email address is valid"
            >
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear selection:focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Enter Your Email Address"
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-orange-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-orange-600"
              >
                Email
              </label>
            </div>

            {/* <!--Password input--> */}
            <div
              className="relative mb-4"
              data-te-input-wrapper-init
              data-te-validate="input"
              data-te-validation-ruleset="isRequired|isLongerThan(6)"
              data-te-invalid-feedback="Please provide a password longer than 6 characters"
              data-te-valid-feedback="Your password is longer than 6 characters!"
            >
              <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput11"
                placeholder="Password"
              />
              <label
                htmlFor="exampleFormControlInput11"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-orange-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-orange-600"
              >
                Password
              </label>
            </div>

            {/* <!--Submit button--> */}
            <div className="mb-12 pb-1 pt-1 text-center">
              <button
                className="bg-orange-600 mb-3 inline-block w-full rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                data-te-submit-btn-ref
              >
                Log in
              </button>

              {/* <!--Forgot password link--> */}
              <a href="#!">Forgot password?</a>
            </div>

            {/* <!--Register button--> */}
            <div className="flex items-center justify-between pb-6">
              <p className="mb-0 mr-2">Don't have an account?</p>
              <button
                type="button"
                onClick={() => router.push("/signup")}
                className="inline-block rounded border-2 border-orange-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-orange-600 transition duration-150 ease-in-out hover:border-orange-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-orange-600 focus:border-orange-600 focus:text-orange-600 focus:outline-none focus:ring-0 active:border-orange-700 active:text-orange-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- Right column container with background and description--> */}
      <div className="bg-orange-600 flex flex-col justify-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none p-6 md:p-12">
        {/* <!-- Logo --> */}
        <Link className="text-white dark:text-orange-400" href="/">
          <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
            <img
              alt="Logo"
              className="h-20 w-32 object-contain"
              src={logo.src}
            />
          </span>
        </Link>
        <div className="mb-12 lg:mb-0 flex-1 flex items-center ">
          <img src={tracking.src} className="w-full rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
