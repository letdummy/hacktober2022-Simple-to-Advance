import React from 'react'
import CharacterCard from './CharacterCard';
import Spinner from './Spinner';

const CharacterGrid = ({ isLoading, characters }) => {
    return isLoading ? (<Spinner />) : (
        <div className='cards'>
            {characters.map((character) => (
                <CharacterCard key={character.char_id} character={character} />
            ))}
        </div>
    )
}

export default CharacterGrid;