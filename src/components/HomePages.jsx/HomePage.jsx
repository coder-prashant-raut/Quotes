import React, { useEffect, useState } from "react";
import imageArray from "../../image/Image";
import domtoimage from "dom-to-image-more";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function HomePage() {
    const [quote, setQuote] = useState({});
    const [copied, setCopied] = useState(false);
    const [bgImage, setBgImage] = useState("");


    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Or your own proxy
const imageUrl = "https://i.pinimg.com/736x/ad/e9/48/ade94889319475e835f26231f1e490dd.jpg";
const finalUrl = proxyUrl + imageUrl;


    const fetchQuote = () => {
        fetch("https://dummyjson.com/quotes/random")
            .then((res) => res.json())
            .then((data) => {
                setQuote(data);
                changeBackground();
            });
    };

  
const downloadQuoteAsImage = () => {
    const node = document.getElementById('quote-container');

    domtoimage.toPng(node, {
        quality: 1, // High resolution
        useCORS: true,
        bgcolor: "white", // Ensure background is captured
    })
    .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'quote.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
    .catch((error) => console.error('Error generating image:', error));
};


    const copyToClipboard = () => {
        const textToCopy = `"${quote?.quote || "Loading..."}" - ${quote?.author || "Unknown"}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const changeBackground = () => {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        setBgImage(imageArray[randomIndex]);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
            <div className="w-full min-h-80 flex-wrap items-center justify-center px-5 py-5">
                
                <div className="max-w-2xl mx-auto rounded-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="pt-1 pb-5 flex justify-center items-center">
                        <p className="bg-amber-300 p-5 font-bold text-2xl mx-auto shadow-lg cursor-pointer rounded-sm hover:bg-amber-500">
                            MasterJi's Quotes
                        </p>
                    </div>
                </div>

                {/* Quote Card with Background Image */}
                <div 
                    id="quote-container"
                    className="max-w-2xl w-full h-auto mx-auto rounded-lg bg-cover shadow-lg px-5 pt-5 pb-10 text-gray-800 relative"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "500px",  // Ensures full capture
                        minHeight: "300px", // Ensures full capture
                        padding: "20px",
                    }}
                >
                    <div className="bg-[rgba(255,255,255,0.7)] p-5 rounded-lg">
                        <div className="text-6xl text-red-700 text-left h-5">“</div>
                        <p className="text-2xl font-extrabold text-black-900 text-center px-5">{quote?.quote || "Loading..."}</p>
                        <div className="text-6xl text-red-700 text-right leading-tight h-5 -mt-3">”</div>
                        <p className="text-md bg-[rgba(206,197,127,0.5)] text-indigo-700 font-bold text-center mt-3 rounded-b-sm">
                            {quote?.author || "Unknown"}
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="max-w-2xl mx-auto rounded-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="flex justify-center items-center gap-4">
                        <button className="bg-amber-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-amber-500" onClick={fetchQuote}>New Quote</button>
                        <button className="bg-green-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-green-500" onClick={copyToClipboard}>{copied ? "Copied!" : "Copy"}</button>
                        <button className="bg-blue-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-blue-500" onClick={downloadQuoteAsImage}>Download</button>
                    </div>
                </div>

                {/* Social Share Buttons */}
                <div className="max-w-2xl flex justify-around mx-auto rounded-lg ">
                    <a href={`https://twitter.com/intent/tweet?text=${quote?.quote}`} target="_blank" rel="noopener noreferrer" className="flex items-center p-2 text-white shadow-lg cursor-pointer rounded-sm bg-blue-500 hover:bg-blue-600" aria-label="Share on Twitter">
                        <FaXTwitter className="h-5 w-5 mr-2" />
                        <small>Share on Twitter</small>
                    </a>
                    <a href={`https://api.whatsapp.com/send?text=${quote?.quote}`} target="_blank" rel="noopener noreferrer" className="flex items-center p-2 text-white shadow-lg cursor-pointer rounded-sm bg-green-500 hover:bg-green-600" aria-label="Share on WhatsApp">
                        <FaWhatsapp className="h-5 w-5 mr-2" />
                        <small>Share on WhatsApp</small>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
