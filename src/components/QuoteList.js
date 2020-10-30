import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import axios from 'axios';
import './QuoteList.css';

const QuoteList = () => {
    const [quotes, setQuotes] = useState(null)
    const [error, setError] = useState(false);


    const getRandomQuote = async () => {
        setError(false);
        try {
            const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=2')
            setQuotes(response.data)
        }
        catch (error) {
            setError(true);
        }
    }
    useEffect(() => {
        getRandomQuote()
    }, [])


    return (
        <div>
            {quotes ? quotes.map(quote => <QuoteCard key={quote.quote} quote={quote} />) : <p className="no-data-yet">No data yet</p>}
            <div className="btn">
                <button className="big-button" type="button" onClick={getRandomQuote} >
                    New quotes!
                </button>
            </div>
            {
                error && <div className="error-fetching-api">some error occurred, while fetching api</div>
            }
        </div>
    );
}

export default QuoteList