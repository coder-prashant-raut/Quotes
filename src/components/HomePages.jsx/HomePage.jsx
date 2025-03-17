import React, { useEffect, useState } from "react";

function HomePage() {
    const [quote, setQuote] = useState({});
    const [copied, setCopied] = useState(false);

    const Quote = () => {
        fetch("https://dummyjson.com/quotes/random")
            .then((res) => res.json())
            .then(setQuote);
    };

    const copyToClipboard = () => {
        const textToCopy = `"${quote.quote}" - ${quote.author}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    useEffect(() => {
        Quote();
    }, []);

    return (
        <div className="min-h-screen w-full bg-gray-200 flex justify-center items-center">
            <div className="w-full min-h-80 flex-wrap items-center justify-center px-5 py-5">
                <div className="max-w-2xl mx-auto rounded-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="pt-1 pb-5 flex justify-center items-center">
                        <p className="bg-amber-300 p-5 w-5xs flex justify-center font-bold font-sans text-2xl mx-auto shadow-lg cursor-pointer rounded-sm hover:bg-amber-500">
                            MasterJi's Quote's
                        </p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="min-w-1.5xl mb-10">
                        <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                        <p className="text-lg text-gray-600 text-center px-5">{quote.quote}</p>
                        <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                    </div>
                    <div className="w-full">
                        <p className="text-md text-indigo-500 font-bold text-center">{quote.author}</p>
                    </div>
                </div>

                {/* Buttons: Get Quote, Copy, Download */}
                <div className="max-w-2xl mx-auto rounded-lg px-5 pt-5 pb-10 text-gray-800">
                    <div className="pt-1 pb-5 flex justify-center items-center gap-4">
                        <button
                            className="bg-amber-300 p-2 mx-auto shadow-lg cursor-pointer rounded-sm hover:bg-amber-500"
                            onClick={Quote}
                        >
                            Gen Quote
                        </button>

                        <button
                            className="bg-green-300 p-2 mx-auto shadow-lg cursor-pointer rounded-sm hover:bg-green-500"
                            onClick={copyToClipboard}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>

                        <button className="bg-amber-300 p-2 mx-auto shadow-lg cursor-pointer rounded-sm hover:bg-amber-500">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
