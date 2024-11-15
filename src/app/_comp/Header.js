import React from "react";
import HeaderImage from "./HeaderImage";
import { spaceGrotesk } from "../font";

function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex flex-row justify-center items-center backdrop-blur-sm gap-1 float-left py-1 px-2 lg:px-3 2xl:px-4 2xl:py-2 bg-red-50 rounded-full border-solid border border-[#FFB8B8]">
              <div className="w-4 h-4 2xl:w-6 2xl:h-6">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9992 13.8878V18.5003C17.9992 18.7028 17.9167 18.8903 17.7817 19.0328C17.6767 19.1303 15.2617 21.5003 11.2492 21.5003C7.23673 21.5003 4.82173 19.1303 4.71673 19.0328C4.58173 18.8903 4.49923 18.7028 4.49923 18.5003V13.8878L10.2442 16.7603C10.5558 16.9178 10.9001 16.9998 11.2492 16.9998C11.5984 16.9998 11.9426 16.9178 12.2542 16.7603L17.9992 13.8878ZM21.7492 15.7088V10.3388L22.0845 10.1708C22.2095 10.1089 22.3148 10.0133 22.3884 9.89476C22.462 9.77622 22.501 9.63946 22.501 9.49992C22.501 9.36038 22.462 9.22362 22.3884 9.10508C22.3148 8.98653 22.2095 8.89092 22.0845 8.82904L11.5845 3.57904C11.4803 3.5269 11.3654 3.49976 11.2489 3.49976C11.1323 3.49976 11.0174 3.5269 10.9132 3.57904L0.413226 8.82904C0.288911 8.89171 0.184446 8.98768 0.111482 9.10624C0.0385176 9.2248 -7.76576e-05 9.36131 1.17314e-07 9.50052C7.78922e-05 9.63974 0.0388256 9.7762 0.111922 9.89468C0.185019 10.0132 0.289591 10.109 0.413976 10.1715L10.914 15.4215C11.0181 15.4735 11.1329 15.5006 11.2492 15.5006C11.3656 15.5006 11.4804 15.4735 11.5845 15.4215L20.2492 11.0888V15.7088C19.803 15.969 19.4992 16.4468 19.4992 17.0003C19.4992 17.8275 20.172 18.5003 20.9992 18.5003C21.8265 18.5003 22.4992 17.8275 22.4992 17.0003C22.4992 16.4475 22.1955 15.969 21.7492 15.7088Z"
                    fill="#ED4758"
                  />
                </svg>
              </div>

              <p className="text-[0.65rem] lg:text-xs 2xl:text-lg text-red-500 font-bold">
                2+2 INTERNATIONAL DEGREE PROGRAMS
              </p>
            </div>
          </div>

          <div>
            <p
              className={`${spaceGrotesk.className} font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl text-gray-800`}
            >
              Dream of studying abroad at a
              <span className="text-red-500">
                {" "}
                top international university{" "}
              </span>
              affordably?
            </p>
          </div>
          <div>
            <p className="font-medium text-xs lg:text-sm 2xl:text-2xl text-gray-600 text-justify">
              {`Start your degree with 2 years at Shoolini University, then
              complete your final 2 years at one of our partner universities
              abroad. Plus, you'll get a`}
              <span className="text-red-500">2-year work visa</span>, opening
              doors to Permanent Residency.
            </p>
          </div>
          <div className="pt-3 md:pt-6">
            <button className="w-24 h-9 text-xs rounded-md text-white bg-[linear-gradient(180deg,_#EE2C3C_0%,_#DA202F_100%)]">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="sm:flex flex-row justify-end hidden">
        <div className="md:w-72 xl:w-90 2xl:w-auto w-full aspect-square">
          <HeaderImage />
        </div>
      </div>
    </div>
  );
}

export default Header;
