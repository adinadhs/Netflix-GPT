import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import MovieDetails from './MovieDetails';

const Browse = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    const showMovieDetails = useSelector(store => store.details.showMovieDetails);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (

        <div className='overflow-x-auto scrollbar-hide'>
            <Header />

            {showMovieDetails ? (
                <MovieDetails />
            ) : showGptSearch ? (
                <GptSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )
            }

        </div>
    );
};

export default Browse;
