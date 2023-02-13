import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Nabvar";
import Footer from "./Footer";
import LoadingJS from "./Loading";
import Whatsapp from "./Whatsapp";

const SharedLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingJS />;
  } else {
    return (
      <main>
        <Navbar />
        <Outlet />
        <Whatsapp />
        <Footer />
      </main>
    );
  }
};

export default SharedLayout;
