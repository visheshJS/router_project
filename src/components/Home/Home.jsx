import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-[80vh] ">
        <div className="sm:flex sm:flex-row py-10 flex flex-col mt-10 sm:items-center items-center sm:justify-around sm:gap-[10px] ">
          <img
            className="w-[350px] h-[320px] rounded-[40px] py-6 "
            src="https://cdn.logojoy.com/wp-content/uploads/20220329165412/app-logo-design-ideas.jpg"
            alt="photo"
          />
          <div>
            <div>
              <Link
                className="inline-flex mt-4 text-white items-center px-8 py-5 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                to="/"
              >
                <svg
                  fill="white"
                  width="40"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
              <h1 className="text-black sm:text-6xl text-4xl mt-4">Download From Store </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
