import { useState } from "react"

export default function RandomQuote() {
    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.", 
        author: "Johann Wolfgang von Goethe"
    });

    const twitter = () => {
        // open url in new tab
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`); 
    }

    loadQuotes();

    return(
        <div className="quote-container">
            <div className="quote">
                {quote.text}
            </div>
            <div>
                <div className="line"></div>
                <div  className="bottom">
                    <div className="author">
                        - {quote.author.split(',')[0]}
                    </div>
                    <div className="icons">
                        <div onClick={() => {random()}}>
                            Random
                        </div>
                        <div onClick={() => {twitter()}}>
                            X
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}