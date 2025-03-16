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
    fetch("https://api.allorigins.win/get?url=https://random-image-pepebigotes.vercel.app/api/random-image")
    .then((res) => res.json())
    .then((data) => console.log(data)) // Check the response structure
    .catch((err) => console.error("Error fetching image:", err));
  
  }

 console.log(quote);
 console.log(image);
 
 
  
  return (
    <div>
      <Navbar />

      <div className="">
      <div className="w-200 min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
        <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
            </div>
        </div>
        <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p className="text-sm text-gray-600 text-center px-5">{quote.quote}</p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">{quote.author}</p>
        <button className=" " onClick={Quote}>Gen Quote</button> 
           
        </div>
    </div>
</div>


      </div>
    </div>
  );
}

export default HomePage;
