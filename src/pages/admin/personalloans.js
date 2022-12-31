import React from "react";

// components

import CardTable from "src/components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable title="Payday Loans" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" title="Personal Credit Line" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable title="Mortgage" />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;
