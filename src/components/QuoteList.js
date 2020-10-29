import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import axios from 'axios';
import './QuoteList.css';

const QuoteList = () => {
    const [quotes, setQuotes] = useState([])
    const getRandomQuote = async () => {
        const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        setQuotes(response.data)
    }
    useEffect(() => {
        getRandomQuote()
    }, [])

    return (
        <div>
            {quotes.map(quote => <QuoteCard key={quote.quote} quote={quote} />)}
            <div className="btn">
                <button className="big-button" type="button" onClick={getRandomQuote} >
                    New quote!
            </button>
            </div>
        </div>
    );
}

export default QuoteList