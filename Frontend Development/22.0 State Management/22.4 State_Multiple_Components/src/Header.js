import React from "react";

function Header({ loggedIn, handleLoggedInClick, toggleFontSize }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
       <button onClick={toggleFontSize}>Increase Font Size</button>
    </div>
  );
}

export default Header;
