import React from "react";

// components

export default function CardBorrower() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="https://api.multiavatar.com/Starcrasher.svg"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide ">
                    22
                  </span>
                  <span className="text-sm">Credits</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide ">
                    1
                  </span>
                  <span className="text-sm ">Applications</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide ">
                    1
                  </span>
                  <span className="text-sm">Approved</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-0">
            <h3 className="text-xl font-semibold leading-normal mb-2">
              Mwungeri Peter
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Muhima, Kigali
            </div>
          </div>
          <div className=" py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h4 className="text-md font-semibold leading-normal mb-2">
                  Source of Income
                </h4>
                <p className="mb-4 text-md font-semibold">
                  Salary - 500,000 Rwf
                </p>
                <p className="mb-4 text-md ">Employer - Earl Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
