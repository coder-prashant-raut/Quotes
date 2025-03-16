import React, { useState } from "react";
import Navbar from "../Navbar";

function HomePage() {
    const [quote, setQuote] = useState([])
    const [image, setImage] = useState([])
  const Quote = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then(setQuote);

      Image()
  };

  const Image = () => {
// fetch("https://random-image-pepebigotes.vercel.app/api/random-image")
// .then((res)=> res.json())
// .then(console.log)

fetch("https://random-image-pepebigotes.vercel.app/api/random-image")
.then((res) => res.json())
.then(setImage);

  }

 console.log(quote);
 console.log(image);
 
 
  
  return (
    <div>
      <Navbar />

      <div className="">
        <h1>hey</h1>

        <h3>{quote.quote}</h3><br />
        <h3>{quote.author}</h3>

        <button className=" " onClick={Quote}>Gen Quote</button>
      </div>
    </div>
  );
}

export default HomePage;
