import React from 'react';
import './QuoteForm.css'

const QuoteForm = () => {

    return (
        <div className="QuoteForm">
            <h3>titre</h3>
            <label htmlFor="character">Character</label>
            <input id="character" name="character" type="text" />
        </div>
    )
}

export default QuoteForm;