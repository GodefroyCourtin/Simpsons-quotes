import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import axios from 'axios';
import './QuoteList.css';

const QuoteList = () => {
    const [quotes, setQuotes] = useState(null)


    const getRandomQuote = async () => {
        const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=2')
        setQuotes(response.data)
    }
    useEffect(() => {
        getRandomQuote()
    }, [])


    return (
        <div>
            {quotes ? quotes.map(quote => <QuoteCard key={quote.quote} quote={quote} />) : <p>No data yet</p>}
            <div className="btn">
                <button className="big-button" type="button" onClick={getRandomQuote} >
                    New quotes!
            </button>
            </div>
        </div>
    );
}

export default QuoteList