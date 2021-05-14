import React, { useEffect, useState } from "react";
import { quotes } from "./../http/api/quotes";
import ButtonComponent from "./ButtonComponent";
import HeaderComponent from "./HeaderComponent";
import SingleQuoteComponent from "./SingleQuoteComponent";

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

  const header = "Random Quotes Generator";

  return (
    <div className="ui placeholder segment">
      <HeaderComponent>{header}</HeaderComponent>
      <SingleQuoteComponent quote={quote} />
      <ButtonComponent getRandomQuote={getRandomQuote}>
        Get Random Quote
      </ButtonComponent>
    </div>
  );
}

export default QuoteComponent;
