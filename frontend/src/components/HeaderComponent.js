import React from "react";

function HeaderComponent({ children }) {
  return (
    <div className="ui icon header">
      <h1>{children}</h1>
    </div>
  );
}

export default HeaderComponent;
