import { useEffect, useState } from "react";

// const Quotes = () => {
//   const api_url = "https://type.fit/api/quotes";
//   const [quote, setQuote] = useState("");

//   const fetchData = async (api_url) => {
//     try {
//       const response = await fetch(api_url);
//       const arrayData = await response.json();
//       const quote = arrayData[parseInt(Math.random() * arrayData.length)].text;
//       return quote;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return "";
//     }
//   };
//   const clickHandler = async () => {
//     const data = await fetchData(api_url);
//     setQuote(data);
//   };

//   return (
//     <div>
//       <p>{quote}</p>
//       <button onClick={clickHandler}>get Quote</button>
//     </div>
//   );
// };

// trying to write the same code with useEffect:-

// const Quotes = () => {
//   const api_url = "https://type.fit/api/quotes";
//   const [quote, setQuote] = useState("");
//   let count = 0;
//   useEffect(() => {
//     fetch(api_url)
//       .then((res) => res.json())
//       .then((json) => setQuote(json[count].text));
//   }, [count]);

//   const clickHandler = () => {
//     count += 1;
//   };
//   return (
//     <div>
//       <p>{quote}</p>
//       <button onClick={clickHandler}>get Quote</button>
//     </div>
//   );
// };
///////////////////////======================THE ABOVE CODE BEHAVES badly JUST REMOVE COUNT

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function Quotes() {
  const api_uri = "https://type.fit/api/quotes";
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch(api_uri)
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        // fixing quote on initial load
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    // then loading quotes from the already existing data
    setQuote(getRandomQuote(quotes));
  }

  return (
    <>
      <button onClick={getNewQuote}>New Quote</button>
      <h3>{quote?.text}</h3>
      <i>- {quote?.author}</i>
    </>
  );
}

export default Quotes;
