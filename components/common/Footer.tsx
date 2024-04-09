import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-orange-100 text-center dark:bg-neutral-600 lg:text-left">
      <div className="container py-6">
        <div className="md:grid md:grid-cols-4 gap-6 w-full md:px-16">
          {/* <!--First links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
              Resources
            </h5>

            <ul className="mb-0 list-none space-y-3">
              <li>
                <a
                  href="/faqs"
                  className="text-neutral-800 dark:text-neutral-200"
                >
                  FAQs
                </a>
              </li>
              {/* <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  Terms
                </a>
              </li> */}
            </ul>
          </div>

          {/* <!--Second links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
              Contact Us
            </h5>

            <ul className="mb-0 list-none space-y-3">
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  +234 813 360 0571
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  +234 703 480 9792
                </a>
              </li>
              <li>
                <a href="#!" className="text-neutral-800 dark:text-neutral-200">
                  hello@easyfixer.ng{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* <!--Third links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
              Support
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a
                  href="/faqs"
                  className="text-neutral-800 dark:text-neutral-200"
                >
                  No. 29A, <br /> Berkley Street, <br /> Onikan Lagos{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* <!--Fourth links section--> */}
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
              Socials
            </h5>

            <ul className="mb-0 list-none space-y-3">
              <li>
                <a
                  target="_blank"
                  href="https://chat.whatsapp.com/EHEOIXzIuWqDI1evNY2FsJ"
                  className="text-neutral-800 dark:text-neutral-200"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61557295831414"
                  className="text-neutral-800 dark:text-neutral-200"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="w-full bg-orange-200 p-4 space-y-3 dark:bg-neutral-700 dark:text-neutral-200">
        <p className="text-center text-neutral-700">
          © {new Date().getFullYear()} Copyright{" "}
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://easy-fixer.com/"
          >
            Easy Fixer
          </a>
        </p>
        <p className="text-center text-neutral-700">All rights reserved</p>
        <p className="text-center text-neutral-700">
          Powered by <span className="font-semibold">Easy Fixer</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
