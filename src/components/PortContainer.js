import React, {useState}  from "react";
import About from '../Pages/about';
import Contact from '../Pages/contact';
import Portfolio from '../Pages/portfolio';
import Resume from '../Pages/resume;'
import NavTabs from "./Navigation";

function Navigation() {
    const [currentPage, setCurrentPage] = useState('About');

    //if current pg is home render home, if it's about render about, if it's blog return blog, otherwise return contact
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      {/*//passing current pg and handlepgchange as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/*//calling render pg function*/}
      {renderPage()}
    </div>
  );
}

export default Navigation;
