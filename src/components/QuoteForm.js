import React, { useState } from 'react'
import './QuoteForm.css'


const MAX_LENGTH = 30;

const QuoteForm = () => {

    const [characters, setCharacters] = useState("")


    const changeCharacters = (event) => {
        // console.log("state :", event.target.value.length)

        if (MAX_LENGTH >= event.target.value.length) {
            setCharacters(event.target.value.toUpperCase())
        }
    }
    const numRemaining = MAX_LENGTH - characters.length
    const maxCharacters = MAX_LENGTH <= characters.length
    const preventDef = (event) => {
        event.preventDefault()
    }

    return (
        <form className="QuoteForm" onSubmit={preventDef}>
            <label htmlFor="character">Character:</label>
            <input className={maxCharacters ? "length-maximum-reached" : "length-ok"} onChange={changeCharacters} id="character" name="character" type="text" value={characters} />
            <p className="remaining-characters">characters remaining: {numRemaining}</p>
            <h3>You typed: {characters}</h3>
        </form>
    )
}

export default QuoteForm