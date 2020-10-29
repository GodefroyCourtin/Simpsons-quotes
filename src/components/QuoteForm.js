import React, { useState } from 'react'
import './QuoteForm.css'


const MAX_LENGTH = 30;

const QuoteForm = () => {

    const [title, setTitle] = useState("")
    // const [characters, setCharacters] = useState("")

    const changeTitle = (event) => {
        // console.log("state :", event.target.value.length)

        if (MAX_LENGTH >= event.target.value.length) {
            setTitle(event.target.value.toUpperCase())
        }
    }

    const preventDef = (event) => {
        event.preventDefault()
    }

    return (
        <form className="QuoteForm" onSubmit={preventDef}>
            <h3>You typed: {title}</h3>
            <label htmlFor="character">Character:</label>
            <input onChange={changeTitle} id="character" name="character" type="text" value={title} />
            <p>characters remaining: {30 - title.length}</p>
        </form>
    )
}

export default QuoteForm