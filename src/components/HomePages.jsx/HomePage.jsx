import React, { useEffect, useState } from "react";
import imageArray from "../../image/Image";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import html2canvas from "html2canvas";

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

  


{/* dowload code here*/}


const captureAndDownload = () => {
    const quoteContainer = document.getElementById("quote-container");

    html2canvas(quoteContainer, {
        allowTaint: true,
        useCORS: true,
        backgroundColor: null, // Keep transparency
        onclone: (clonedDocument) => {
            const clonedQuoteContainer = clonedDocument.getElementById("quote-container");
            clonedQuoteContainer.style.backgroundImage = `url(${bgImage})`; // Reapply background
        }
    }).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        downloadImage(dataURL, "quote.png");
    });
};

function downloadImage(data, filename = "quote.png") {
    const a = document.createElement("a");
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}



{/* dowload code here*/}








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
                    className="quote-container"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // width: "500px",
                        // height: "300px",
                        borderRadius: "15px",
                        padding: "20px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#fff",
                        position: "relative"
                    }}
                >
                    <div className="quote-box" style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "20px",
                        borderRadius: "10px",
                        width: "90%",
                    }}>
                        <div className="quote-mark" style={{ fontSize: "40px", color: "#ffcc00" }}>“</div>
                        <p className="quote-text" style={{ fontSize: "22px", fontWeight: "bold" }}>
                            {quote?.quote || "Loading..."}
                        </p>
                        <div className="quote-mark" style={{ fontSize: "40px", color: "#ffcc00" }}>”</div>
                        <p className="quote-author" style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            marginTop: "10px",
                            background: "rgba(255, 255, 255, 0.2)",
                            padding: "5px",
                            borderRadius: "5px"
                        }}>
                            {quote?.author || "Unknown"}
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="max-w-2xl mx-auto rounded-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="flex justify-center items-center gap-4">
                        <button className="bg-amber-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-amber-500" onClick={fetchQuote}>New Quote</button>
                        <button className="bg-green-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-green-500" onClick={copyToClipboard}>{copied ? "Copied!" : "Copy"}</button>
                        <button className="bg-blue-300 p-2 shadow-lg cursor-pointer rounded-sm hover:bg-blue-500"  onClick={captureAndDownload}>Download</button>
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
