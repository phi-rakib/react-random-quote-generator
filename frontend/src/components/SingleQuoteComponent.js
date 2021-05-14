import React from "react";

function SingleQuoteComponent({ quote }) {
  let content =
    quote.body.length > 0 ? `"${quote.body}" - ${quote.author}` : "";

  return (
    <div className="ui inverted center aligned segment">
      <h3>{content}</h3>
    </div>
  );
}

export default SingleQuoteComponent;
