import React from "react";

function ButtonComponent({ getRandomQuote, children }) {
  return (
    <div className="inline">
      <div className="ui primary button" onClick={getRandomQuote}>
        {children}
      </div>
    </div>
  );
}

export default React.memo(ButtonComponent);
