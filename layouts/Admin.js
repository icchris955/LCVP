import React from "react";
import withPrivateRoute from "../utils/withPrivateRoute";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

const Admin = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-white">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

Admin.getInitialProps = async (props) => {
  console.log("##### Congratulations! You are authorized! ######", props);
  return {};
};
export default withPrivateRoute(Admin);
