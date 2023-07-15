import React from "react";
import "./../styles/styles.css";
const Header = ({name}) => {
    return (
      <div className="header">
        <h2>{name}</h2>
      </div>
    );
  };
  
  export default Header;