import React, { useEffect, useState } from "react";
import { quotes } from "./../http/api/quotes";

function QuoteComponent() {
  const [quoteList, setQuoteList] = useState([]);
  const [quote, setQuote] = useState({ body: "", author: "" });
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    setQuoteList(quotes);
  }, []);

  const getRandomQuote = () => {
    let idx = Math.floor(Math.random() * quoteList.length);
    idx = idx === prevIndex ? (idx + 1) % (quoteList.length - 1) : idx;
    setPrevIndex(idx);
    setQuote(quoteList[idx]);
  };

  let content = quote.body.length > 0 ? `"${quote.body}" - ${quote.author}` : "";

  return (
    <div className="ui placeholder segment">
      <div className="ui icon header"><h1>Random Quotes Generator</h1></div>
      <div className="ui inverted center aligned segment">
        <h3>{content}</h3>
      </div>
      <div className="inline">
        <div className="ui primary button" onClick={getRandomQuote}>
          Get Random Quote
        </div>
      </div>
    </div>
  );
}

export default QuoteComponent;
