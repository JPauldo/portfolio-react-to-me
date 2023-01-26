import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    document.title = currentPage;
  }, [currentPage])

  return (
    <div style={{background: '#f0f8ff'}}>
      <Header currentPage={currentPage} handlePageSwitch={handlePageSwitch} />
      <main className="columns is-centered my-3">
        <div className="column is-one-quarter">
          {renderPage()}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
