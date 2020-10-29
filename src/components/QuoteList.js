import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import axios from 'axios';


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
            <button type="button" onClick={getRandomQuote} >Get new quote!</button>
        </div>
    );
}

export default QuoteList