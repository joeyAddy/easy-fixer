"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`sticky top-0 left-0 right-0 !z-[9999] flex w-full items-center justify-between md:px-14 py-4 ${
        isScrolled
          ? "shadow-lg shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 bg-white"
          : ""
      } lg:flex-wrap lg:justify-start`}
      data-te-navbar-ref
    >
      {/* <!-- Container wrapper --> */}
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div className="flex items-center">
          {/* <!-- Toggle button --> */}
          <button
            className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* <!-- Navbar Brand --> */}
          <a className="text-green-600 dark:text-green-400" href="#!">
            <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
              <h1 className="text-lg font-semibold">Logo</h1>
            </span>
          </a>
        </div>

        {/* <!-- Collapsible wrapper --> */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContentY"
          data-te-collapse-item
        >
          {/* <!-- Left links --> */}
          <ul
            className="md:ml-8 mr-auto md:space-x-2 lg:flex lg:flex-row"
            data-te-navbar-nav-ref
          >
            <li data-te-nav-item-ref>
              <a
                className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Home
              </a>
            </li>
            <li data-te-nav-item-ref>
              <a
                className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="#why"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Why Easy Fixer
              </a>
            </li>
            <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
              <a
                className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Get Easy Fixer
              </a>
            </li>
            <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
              <a
                className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                FAQs
              </a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
          <button
            onClick={() => router.push("/login")}
            type="button"
            className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-green-600 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-green-600 focus:text-green-600 focus:outline-none focus:ring-0 active:text-green-700 dark:text-green-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-green-500 dark:focus:text-green-500 dark:active:text-green-600"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/signup")}
            type="button"
            className="inline-block rounded bg-green-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Sign up
          </button>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
  );
};

export default NavigationBar;
