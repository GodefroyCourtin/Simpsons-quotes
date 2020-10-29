import React, { useState } from 'react';
import './QuoteCard.css';
import PropTypes from 'prop-types';


const QuoteCard = ({ quote }) => {
    const [favorite, setFavorite] = useState(false);


    return (
        <figure className="QuoteCard">
            <img src={quote.image} alt={quote.character} />
            <figcaption>
                <blockquote>
                    {quote.quote}
                </blockquote>
                <p>
                    <cite>{quote.character}</cite>
                    <span onClick={() => { setFavorite(!favorite) }} className={favorite ? "is-favorite" : ""}>&#9733;</span>
                </p>
            </figcaption>
        </figure>
    )
}

QuoteCard.propTypes = {
    quote: PropTypes.string.isRequired,
    // character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired

};

export default QuoteCard;