import React from "react";

import { lazy, Suspense } from "react";


const Body = lazy(() => import("../Body"));
const Footer = lazy(() => import("../Footer"));

const Landingpage = () => {
  return (
    <>
   
      <Body />
      <Footer />
    </>
  );
};

export default Landingpage;
