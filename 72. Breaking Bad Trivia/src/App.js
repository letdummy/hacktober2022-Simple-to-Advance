import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterGrid from './components/CharacterGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchCharacters = async () => {
            const fetchedData = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)

            console.log(fetchedData.data);
            setCharacters(fetchedData.data);
            setIsLoading(false);
        }

        fetchCharacters();
    }, [query])


    return (
        <>
            <div className='container'>
                <Header />
                <SearchBar getQuery={(q) => { setQuery(q) }} />
                <CharacterGrid isLoading={isLoading} characters={characters} />
                <Footer />
            </div>
        </>
    )
}

export default App