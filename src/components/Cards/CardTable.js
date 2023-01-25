import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "src/components/Dropdowns/TableDropdown.js";

export default function CardTable({ color, title }) {
  const data = [
    {
      names: "Paul Rutikanga",
      budget: 100000,
      avatar: "M",
      completion: "98",
    },
    {
      names: "Maniriho Esther",
      budget: 10000,
      avatar: "Bat",
      completion: "80",
    },
    { names: "Murerwa Peter", budget: 1000, avatar: "Shark", completion: "90" },
  ];
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded accordion " +
          (color === "light" ? "bg-gray-100" : "bg-black text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className={color === "light" ? "shadow-md" : "shadow-sm"}>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-white text-gray-700"
                      : "bg-blueGray-800 text-white")
                  }
                >
                  Names
                </th>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-white text-gray-700"
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Budget
                </th>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-white text-gray-700"
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Status
                </th>

                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-white text-gray-700 "
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    "px-6 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-white text-gray-700"
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="https://api.multiavatar.com/Starcrasher.svg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Mwungeri Peter
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  100000 RWF
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-circle text-orange-500 mr-2"></i> pending
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">98%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "98%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              {data.map((item, index) => {
                return (
                  <tr className="hover:bg-gray-100">
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src={`https://api.multiavatar.com/${item.avatar}.svg`}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {item.names}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      ${item.budget} USD
                    </td>
                    {/* switch (item.completion) {
                      case 80: color = "blue"
                        break;
                    
                      default:
                        break;
                    }*/}
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                      pending
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">{item.completion}%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div
                              style={{ width: item.completion + "%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <TableDropdown />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
  title: "Loan Title",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
  title: "string",
};
