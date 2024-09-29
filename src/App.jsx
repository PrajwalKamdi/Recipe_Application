import React from "react";

import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import { Outlet } from "react-router";

function App() {
  
const value = useSelector((store)=>store.search.query)

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
