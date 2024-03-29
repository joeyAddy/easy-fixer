import whyImage from "@/assets/images/why-bg.jpg";
const Why = () => {
  return (
    <div className="container relative my-6 mx-auto md:px-12">
      <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:w-full [&>svg]:lg:block">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-[450px] left-[500px] hidden w-full transition-opacity duration-300 dark:opacity-0 lg:block"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(55, 248, 185.891, 0.12)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(31, 251, 157.845, 0.24)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M21.6,-16.7C29.1,-7.8,37.2,1.3,35,7C32.9,12.6,20.6,15,10.2,19.1C-0.1,23.3,-8.6,29.4,-14.9,27.6C-21.1,25.9,-25.1,16.3,-23.9,9.1C-22.6,1.9,-16.1,-2.8,-11.2,-11.1C-6.3,-19.4,-3.2,-31.2,1.9,-32.7C7,-34.2,14.1,-25.5,21.6,-16.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
          ></path>
        </svg>
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-[250px] -left-10 hidden w-full transition-opacity duration-300 dark:opacity-0 lg:block"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(31, 251, 157.845, 0.24)" offset="0%"></stop>
              <stop
                stopColor="rgba(55, 248, 185.891, 0.12)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,441L24,432.8C48,425,96,408,144,400.2C192,392,240,392,288,392C336,392,384,392,432,400.2C480,408,528,425,576,416.5C624,408,672,376,720,334.8C768,294,816,245,864,245C912,245,960,294,1008,294C1056,294,1104,245,1152,204.2C1200,163,1248,131,1296,155.2C1344,180,1392,261,1440,253.2C1488,245,1536,147,1584,122.5C1632,98,1680,147,1728,187.8C1776,229,1824,261,1872,294C1920,327,1968,359,2016,383.8C2064,408,2112,425,2160,424.7C2208,425,2256,408,2304,375.7C2352,343,2400,294,2448,236.8C2496,180,2544,114,2592,122.5C2640,131,2688,212,2736,236.8C2784,261,2832,229,2880,212.3C2928,196,2976,196,3024,236.8C3072,278,3120,359,3168,351.2C3216,343,3264,245,3312,236.8C3360,229,3408,310,3432,351.2L3456,392L3456,490L3432,490C3408,490,3360,490,3312,490C3264,490,3216,490,3168,490C3120,490,3072,490,3024,490C2976,490,2928,490,2880,490C2832,490,2784,490,2736,490C2688,490,2640,490,2592,490C2544,490,2496,490,2448,490C2400,490,2352,490,2304,490C2256,490,2208,490,2160,490C2112,490,2064,490,2016,490C1968,490,1920,490,1872,490C1824,490,1776,490,1728,490C1680,490,1632,490,1584,490C1536,490,1488,490,1440,490C1392,490,1344,490,1296,490C1248,490,1200,490,1152,490C1104,490,1056,490,1008,490C960,490,912,490,864,490C816,490,768,490,720,490C672,490,624,490,576,490C528,490,480,490,432,490C384,490,336,490,288,490C240,490,192,490,144,490C96,490,48,490,24,490L0,490Z"
          ></path>
        </svg>
      </span>
      <h2 className="mb-12 text-center text-blue-950 text-3xl font-bold">
        Why so great?
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
          <div
            className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={whyImage.src} className="w-full" />
            <a>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                  <div className="px-6 py-12 text-center text-white md:px-12">
                    <h3 className="mb-6 text-2xl font-bold uppercase">
                      Your future at your{" "}
                      <u className="text-[hsl(210,12%,80%)]">fingertips</u>
                    </h3>
                    <p className="text-[hsl(210,23%,90%)]">
                      With EasyFixer, the future of bill payments is here. Our
                      easy-to-use platform puts the power in your hands,
                      allowing you to manage your bills conveniently and
                      efficiently. Say goodbye to long queues and tedious
                      processes. With EasyFixer, your future is truly at your
                      fingertips.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md bg-blue-950 p-4 shadow-lg dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold text-blue-950">Support 24/7</p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Access EasyFixer anytime, anywhere. Our platform is available
                24/7 to cater to your needs.
              </p>
            </div>
          </div>

          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md bg-blue-950 p-4 shadow-lg dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold text-blue-950">Safe and solid</p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Your transactions are safe and secure with EasyFixer's robust
                security measures.
              </p>
            </div>
          </div>

          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md bg-blue-950 p-4 shadow-lg dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold text-blue-950">Extremely fast</p>
              <p className="text-neutral-500 dark:text-neutral-300">
                No lags that leave your transactions pending and your funds
                withheld for days. EasyFixer is reliably fast.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="shrink-0">
              <div className="rounded-md bg-blue-950 p-4 shadow-lg dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold text-blue-950">Convenience</p>
              <p className="text-neutral-500 dark:text-neutral-300">
                No need to visit multiple outlets or stand in long queues. Pay
                bills from the comfort of your home or on the go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
