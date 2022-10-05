import React, { useState } from 'react';


const SearchBar = ({ getQuery }) => {

    const [text, setText] = useState('');

    const changeHandler = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <form className='search'>
            <input placeholder='Search for a character, bitch' className='form-control' type='text' value={text} autoFocus onChange={(e) => changeHandler(e.target.value)} >
            </input>
        </form>
    )
}

export default SearchBar