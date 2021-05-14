import React, { useEffect, useState } from "react";
import { quotes } from "./../http/api/quotes";
import ButtonComponent from "./ButtonComponent";
import HeaderComponent from "./HeaderComponent";
import SingleQuoteComponent from "./SingleQuoteComponent";
import { getRandomNumber } from "./../helper";

function QuoteComponent() {
  const [quoteList, setQuoteList] = useState([]);
  const [quote, setQuote] = useState({ body: "", author: "" });
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    console.log("get quotes");
    setQuoteList(quotes);
  }, []);

  const getRandomQuote = () => {
    let idx = getRandomNumber(0, quoteList.length);
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
