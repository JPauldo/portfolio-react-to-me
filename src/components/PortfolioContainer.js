import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    switch (currentPage) {
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };
  console.log(currentPage);

  const handlePageSwitch = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageSwitch={handlePageSwitch} />
      <main>
        {renderPage()}
      </main>
      {/* <Footer /> */}
    </>
  );
}
