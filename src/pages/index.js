/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from "react";

import IndexNavbar from "src/components/Navbars/IndexNavbar.js";
import Footer from "src/components/Footers/Footer.js";
import { AuthContext } from "../context/AuthContext";

export default function Index() {
  const { authState } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      <IndexNavbar fixed />
      <section>
        <div className="sticky top-0 h-screen p-50 flex flex-col items-center justify-center bg-white">
          <h2 className="text-4xl">Why LCVP</h2>
          {user ? <h1>Yea, There is a user</h1> : <h1>....</h1>}
          <br />
          <p className="w-70 text-center tracking-wider ">
            Introducing our cutting-edge loan credibility verification system,
            designed to give lenders the peace of mind they need when assessing
            potential borrowers. Our system uses advanced algorithms and data
            analysis to accurately assess a borrower's creditworthiness,
            reducing the risk of default and helping lenders make more informed
            decisions.
          </p>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
          <h2 className="text-4xl">The Second Title</h2>
          <p className="text-center p-50">
            With our system, lenders can quickly and easily verify a borrower's
            income, employment history, and credit score. We also offer identity
            verification services to ensure the borrower is who they claim to
            be. This information is then used to generate a detailed report,
            including a creditworthiness score, that lenders can use to make a
            more informed decision.
          </p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white">
          <h2 className="text-4xl">The Third Title</h2>
          <p className="text-center p-50">
            Our system is easy to use, with a user-friendly interface that
            allows lenders to upload the necessary information and receive their
            report in just a matter of minutes. We also offer 24/7 customer
            support to help with any questions or issues that may arise.
          </p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
          <h2 className="text-4xl">The Fourth Title</h2>
          <p className="text-center p-50">
            Our loan credibility verification system is a must-have for any
            lender looking to reduce risk and make more informed decisions. Sign
            up today and start making better lending decisions with confidence.
          </p>
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
