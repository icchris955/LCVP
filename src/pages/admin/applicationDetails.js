import React from "react";

// components

import CardSettings from "src/components/Cards/CardApplication.js";
import CardBorrower from "src/components/Cards/CardBorrower.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardBorrower />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
