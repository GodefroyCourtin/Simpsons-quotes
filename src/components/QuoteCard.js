import React, { useState } from 'react';
import './QuoteCard.css';
import PropTypes from 'prop-types';


const QuoteCard = ({ quote, character, image }) => {
    const [favorite, setFavorite] = useState(false);


    return (
        <figure className="QuoteCard">
            <img src={image} alt={character.firstName} />
            <figcaption>
                <blockquote>
                    {quote}
                </blockquote>
                <p>
                    <cite>{character.firstName} {character.lastName}</cite>
                    <span onClick={() => { setFavorite(!favorite) }} className={favorite ? "is-favorite" : ""}>&#9733;</span>
                </p>
            </figcaption>
        </figure>
    )
}

QuoteCard.propTypes = {
    quote: PropTypes.string.isRequired,
    // firstName: PropTypes.string.isRequired,
    // lastName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired

};

export default QuoteCard;