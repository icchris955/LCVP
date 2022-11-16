/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
// import { AuthContext } from "../context/AuthContext";

export default function Index() {
  // const { authState } = useContext(AuthContext);
  return (
    <>
      <IndexNavbar fixed />
      <section>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white">
          <h2 className="text-4xl">The First Title</h2>
          <p>Scroll Down</p>
          <br />
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
          <h2 className="text-4xl">The Second Title</h2>
          <p>Scroll Down</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white">
          <h2 className="text-4xl">The Third Title</h2>
          <p>Scroll Down</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
          <h2 className="text-4xl">The Fourth Title</h2>
        </div>
        <div className="w-full h-full fixed">
          <div className="absolute bottom-0 right-0 mr-8 mb-32 ">
            <div className="bg-white rounded-lg shadow-md px-4 py-2 border-1 border-gray-400">
              Was this doc helpful to you?
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
