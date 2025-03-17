import React, { useEffect, useState } from "react";
import imageArray from "../../image/Image";
import domtoimage from "dom-to-image";

function HomePage() {
    const [quote, setQuote] = useState({});
    const [copied, setCopied] = useState(false);
    const [bgImage, setBgImage] = useState("");

    const fetchQuote = () => {
        fetch("https://dummyjson.com/quotes/random")
            .then((res) => res.json())
            .then((data) => {
                setQuote(data);
                changeBackground();
            });
    };

    const downloadQuoteAsImage = () => {
        const node = document.getElementById("quote-container");
        if (!node) {
            console.error("Quote container not found!");
            return;
        }

        domtoimage.toPng(node)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "quote.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Error capturing image:", error);
            });
    };

    const copyToClipboard = () => {
        const textToCopy = `"${quote.quote}" - ${quote.author}`;
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
                
                {/* Title */}
                <div className="max-w-2xl mx-auto rounded-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="pt-1 pb-5 flex justify-center items-center">
                        <p className="bg-amber-300 p-5 font-bold text-2xl mx-auto shadow-lg cursor-pointer rounded-sm hover:bg-amber-500">
                            MasterJi's Quotes
                        </p>
                    </div>
                </div>

                {/* Quote Container */}
                <div 
                    id="quote-container"
                    className="max-w-2xl mx-auto rounded-lg bg-cover shadow-lg px-5 pt-5 pb-10 text-gray-800 relative"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="bg-[rgba(128,131,134,0.5)] p-5 rounded-lg">
                        <div className="text-6xl text-red-700 text-left h-5">“</div>
                        <p className="text-2xl font-extrabold text-black-900 text-center px-5">{quote.quote}</p>
                        <div className="text-6xl text-red-700 text-right leading-tight h-5 -mt-3">”</div>
                        <p className="text-md bg-[rgba(206,197,127,0.5)] text-indigo-700 font-bold text-center mt-3 rounded-b-sm">
                            {quote.author}
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="max-w-2xl mx-auto rounded-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="flex justify-center items-center gap-4">
                        <button 
                            className="bg-amber-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-amber-500"
                            onClick={fetchQuote}
                        >
                            New Quote
                        </button>

                        <button 
                            className="bg-green-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-green-500"
                            onClick={copyToClipboard}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>

                        <button 
                            className="bg-blue-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-blue-500"
                            onClick={downloadQuoteAsImage}
                        >
                            Download
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomePage;
