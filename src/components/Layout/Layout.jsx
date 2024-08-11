import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/Admin";

  return (
    <Fragment>
      {!isAdminPage && <Header />}
      <div>
        <Routers />
      </div>
      {!isAdminPage && <Footer />}
    </Fragment>
  );
};

export default Layout;
