import React from 'react';
import './QuoteCard.css';


const QuoteCard = ({ quote, character, image }) => (
    <figure className="QuoteCard">
        <img src={image} alt="Nelson Muntz" />
        <figcaption>
            <blockquote>
                {quote}
            </blockquote>
            <cite>{character.firstName} {character.lastName}</cite>
        </figcaption>
    </figure>
)

export default QuoteCard;