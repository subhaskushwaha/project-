import React from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome for icons
import CompareMedicine from "./components/CompareMedicine";
import FaqAndRatings from "./components/FaqAndRatings"
import DisclaimerAndFooter from "./components/DisclaimerAndFooter";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Main Content */}
      <MainContent />
      <CompareMedicine />
      <FaqAndRatings />
      <DisclaimerAndFooter />
      
    </div>
  );
};

export default App;
