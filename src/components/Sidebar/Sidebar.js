import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "src/components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "src/components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-3xl bg-black flex flex-wrap items-center justify-between relative md:w-64 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-white md:hidden px-3 py-1 text-2xl leading-none bg-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-black m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="hidden md:block md:pb-2 text-white mr-0 text-md uppercase p-4 px-0 text-center body-font font-kaushanscript"
            >
              LOAN CREDIBILITY VERIFICATION PLATFORM
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-white mr-0 whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      LOAN CREDIBILITY VERIFICATION PLATFORM
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-white md:hidden px-3 py-0 text-2xl leading-none bg-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  border-black placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-white text-xs uppercase font-bold  pt-1 pb-4 no-underline hidden">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-semibold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-white hover:text-md"
                        : "text-blueGray-100")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-200")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/personalloans">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-semibold block " +
                      (router.pathname.indexOf("/admin/personalloans") !== -1
                        ? "text-white hover:text-white"
                        : "text-white hover:text-white-")
                    }
                  >
                    <i
                      className={
                        "fas fa-thin fa-users mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/personalloans") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Personal Loans
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/businessloans">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-semibold block " +
                      (router.pathname.indexOf("/admin/businessloans") !== -1
                        ? "text-white hover:text-white"
                        : "text-white hover:text-white-")
                    }
                  >
                    <i
                      className={
                        "fas fa-doutone fa-briefcase mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/businessloans") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Business Loans
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="#pablo">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-semibold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-white hover:text-white-200"
                        : "text-white hover:text-white")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Terms
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-semibold block " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-white hover:font-bold"
                        : "text-white hover:font-bold")
                    }
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Analysis
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              {" "}
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="text-white hover:text-blueGray-500 text-xs uppercase py-3 font-semibold block"
                  >
                    <i className="fas fa-solid fa-user text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Profile
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="text-white hover:text-blueGray-500 text-xs uppercase py-3 font-semibold block"
                  >
                    <i className="far fa-file-alt  text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Documentation
                  </a>
                </Link>
              </li>
              {/* <li className="items-center">
                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className="text-white hover:text-blueGray-500 text-xs uppercase py-3 font-semibold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a
                    href="#pablo"
                    className="text-white hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                    Register
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
