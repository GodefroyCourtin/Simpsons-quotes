import React, { useState } from 'react';
import './QuoteForm.css'



const QuoteForm = () => {

    const [title, setTitle] = useState("")
    const [characters, setCharacters] = useState("")

    const changeTitle = (event) => {
        // console.log("state :", event.target.value)
        setTitle(event.target.value)
    }
    // const charactersRemaining = (event) => {
    //     // console.log("state :", event.target.value)
    //     setCharacters(event.target.value)
    // }


    return (
        <div className="QuoteForm">
            <h3>You typed: {title.toUpperCase()}</h3>
            <label htmlFor="character">Character:</label>
            <input onChange={changeTitle} id="character" name="character" type="text" value={title} />
            {/* <input onChange={charactersRemaining} id="character" name="character" type="text" value={characters} />
            <p>{10 - characters.length}</p> */}
            <p>characters remaining: {20 - title.length}</p>
        </div>
    )
}

export default QuoteForm;