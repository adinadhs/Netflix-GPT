import React from 'react';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    return (
        showGptSearch && <GptSearch />

    )
}

export default MovieDetails;
