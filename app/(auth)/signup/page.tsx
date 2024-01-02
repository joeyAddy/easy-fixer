"use client";
import React, { useEffect } from "react";
import coordinatePayments from "@/assets/images/coordinate-payments.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
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
      <div className="px-4 md:px-0 lg:w-6/12">
        <div className="md:mx-auto md:p-12 flex flex-col justify-center md:w-5/6 h-full">
          {/* <!--Logo--> */}
          <div className="text-center">
            <h4 className="mb-12 md:6 md:mt-1 pb-1 text-xl font-semibold">
              Welcome to Easy Fixer!
            </h4>
          </div>

          <form data-te-validation-init data-te-active-validation="true">
            <p className="mb-4">Please fill the form to create your account</p>
            <div className="flex gap-4">
              {/* <!--Username input--> */}
              <div
                className="relative mb-4"
                data-te-input-wrapper-init
                data-te-validate="input"
                data-te-validation-ruleset="isRequired|isLongerThan(2)"
                data-te-invalid-feedback="Provide more than 2 letters"
                data-te-valid-feedback="The name is valid"
              >
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear selection:focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your first Name"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-green-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-600"
                >
                  First Name
                </label>
              </div>
              {/* <!--Last Name input--> */}
              <div
                className="relative mb-4"
                data-te-input-wrapper-init
                data-te-validate="input"
                data-te-validation-ruleset="isRequired|isLongerThan(2)"
                data-te-invalid-feedback="Provide more than 2 letters"
                data-te-valid-feedback="The name is valid"
              >
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear selection:focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your last Name"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-green-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-600"
                >
                  Last Name
                </label>
              </div>
            </div>
            {/* <!--Email input--> */}
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
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-green-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-600"
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
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-green-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-600"
              >
                Password
              </label>
            </div>

            {/* <!--Confirm Password input--> */}
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
                placeholder="Confirm Password"
              />
              <label
                htmlFor="exampleFormControlInput11"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-green-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-green-600"
              >
                Confirm Password
              </label>
            </div>

            {/* <!--Submit button--> */}
            <div className="mb-12 pb-1 pt-1 text-center">
              <button
                className="bg-green-600 mb-3 inline-block w-full rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                data-te-submit-btn-ref
              >
                Sign Up
              </button>
            </div>

            {/* <!--Register button--> */}
            <div className="flex items-center justify-between pb-6">
              <p className="mb-0 mr-2">Already have an account?</p>
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="inline-block rounded border-2 border-green-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-green-600 transition duration-150 ease-in-out hover:border-green-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-green-600 focus:border-green-600 focus:text-green-600 focus:outline-none focus:ring-0 active:border-green-700 active:text-green-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- Right column container with background and description--> */}
      <div className="bg-green-600 flex flex-col justify-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none p-6 md:p-12">
        {/* <!-- Logo --> */}
        <Link className="text-white dark:text-green-400" href="/">
          <h1 className="text-lg font-semibold">Logo</h1>
        </Link>
        <div className="mb-12 lg:mb-0 flex-1 flex items-center ">
          <img
            src={coordinatePayments.src}
            className="w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
