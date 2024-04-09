"use client";
import { useEffect, useState } from "react";
import mobilePayments from "@/assets/images/mobile-payments.png";
import secure from "@/assets/images/safe-secure.png";
import movieSubscriptions from "@/assets/images/movie-shows.png";
import Services from "@/components/home/Services";
import Why from "@/components/home/Why";
import Stats from "@/components/home/Stats";
import Users from "@/components/home/Users";

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const { Collapse, Dropdown, Carousel, initTE } = await import(
        "tw-elements"
      );
      initTE({ Collapse, Dropdown, Carousel });
    };
    init();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <section className="mb-12">
        {/* <!-- SVG Background --> */}
        <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[600px] [&>svg]:w-full [&>svg]:lg:block">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute top-0 hidden h-[550px] w-full transition-opacity duration-300 dark:opacity-0 lg:block"
          >
            <defs>
              <linearGradient
                id="sw-gradient-light"
                x1="0"
                x2="0"
                y1="1"
                y2="0"
              >
                <stop
                  stopColor="rgba(255, 159, 68, 0.12)" // Saturated orange color with opacity
                  offset="0%"
                ></stop>
                <stop
                  stopColor="rgba(255, 102, 0, 0.24)" // Saturated orange color with opacity
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-light)"
              d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
            ></path>
          </svg>
          <svg
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="absolute top-0 hidden h-[650px] w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block"
          >
            <defs>
              <linearGradient id="sw-gradient-dark" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="hsl(240, 4%, 28%)" offset="0%"></stop>
                <stop stopColor="hsl(0, 0%, 15%)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-dark)"
              d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
            ></path>
          </svg>
        </span>

        {/* <!-- SVG Background --> */}

        <div
          id="carouselExampleIndicators"
          className="relative"
          data-te-carousel-init
          data-te-ride="carousel"
        >
          {/* <!--Carousel indicators--> */}
          <div
            className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="0"
              data-te-carousel-active
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-orange-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="1"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-orange-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide-to="2"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-orange-600 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* <!--Carousel items--> */}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!--First item--> */}
            <div
              className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active
            >
              <div className="block w-full px-6 pb-6 text-center md:px-[4.5rem] lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                  <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="mt-10 lg:-mt-10 space-y-3 md:space-y-5">
                      <h1 className="text-blue-950 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                        Simplify your bill payments
                        <br />
                        <span className="text-orange-600">
                          in a few quick steps.
                        </span>
                      </h1>
                      <p className="text-reen-900">
                        Easy just got Easier with paying bills.
                      </p>
                      <a
                        className="mb-2 inline-block rounded bg-orange-600 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        href="#!"
                        role="button"
                      >
                        Get started
                      </a>
                      <a
                        className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-orange-500 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-orange-500-600 focus:text-orange-500-600 focus:outline-none focus:ring-0 active:text-orange-500-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        href="/signup"
                        role="button"
                      >
                        Learn more
                      </a>
                    </div>
                    <div className="mb-12 -mt-10 lg:mb-0">
                      <img
                        src={mobilePayments.src}
                        className="w-[90%] rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Second item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <div className="block w-full px-6 pb-6 text-center md:px-[4.5rem] lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                  <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="mt-10 lg:-mt-10 space-y-3 md:space-y-5">
                      <h1 className="text-blue-950 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                        Safe, secure and just as fast as you
                        <br />
                        <span className="text-orange-600">think about it</span>
                      </h1>
                      <p className="text-reen-900">
                        Easy just got Easier with paying bills.
                      </p>
                      <a
                        className="mb-2 inline-block rounded bg-orange-600 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        href="/signup"
                        role="button"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mb-12 -mt-10 lg:mb-0">
                      <img
                        src={secure.src}
                        className="w-[90%] rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Third item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <div className="block w-full px-6 pb-6 text-center md:px-[4.5rem] lg:my-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                  <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="mt-10 lg:mt-0 space-y-3 md:space-y-5">
                      <h1 className="text-blue-950 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                        Never miss an episode of
                        <br />
                        <span className="text-orange-600">
                          your favorite series again.
                        </span>
                      </h1>
                      <p className="text-reen-900">
                        Subscribe to DSTV, GOTV SHOWMAX, and Startimes via
                        PayMyBills to stay up-to-date with the latest episodes
                        of your favorite shows.
                      </p>
                      <a
                        className="mb-2 inline-block rounded bg-orange-600 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        href="/signup"
                        role="button"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mb-12 -mt-7 lg:mb-0">
                      <img
                        src={movieSubscriptions.src}
                        className="w-full rounded-lg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="mb-24">
        <Services />
      </section>
      <section id="why" className="mb-24">
        <Why />
      </section>
      <section className="mb-12">
        <Stats />
      </section>
      <section className="mb-12">
        <Users />
      </section>
    </main>
  );
}
