/**
 * MovieCard Component
 * 
 * Displays information about a single movie including poster, title, rating,
 * language, and release year.
 * 
 * @author Haian Ibrahim
 * @github https://github.com/hki98
 * @linkedin https://linkedin.com/in/haian-k-ibrahim
 * @email contact@haian.me
 */

import React from 'react'

/**
 * MovieCard component for displaying movie information
 * 
 * @param {Object} props - Component props
 * @param {Object} props.movie - Movie data object
 * @param {string} props.movie.title - Movie title
 * @param {number} props.movie.vote_average - Movie rating (0-10)
 * @param {string} props.movie.poster_path - Path to movie poster image
 * @param {string} props.movie.release_date - Movie release date (YYYY-MM-DD)
 * @param {string} props.movie.original_language - Original language code
 * @returns {JSX.Element} Rendered MovieCard component
 */
const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => {
    return (
        <div className='movie-card'>
            {/* Movie poster with fallback image */}
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `${import.meta.env.BASE_URL}no-movie.png`} />

            <div className='mt-4'>
                {/* Movie title */}
                <h3>{title}</h3>

                <div className='content'>
                    {/* Movie rating */}
                    <div className='rating'>
                        <img src={`${import.meta.env.BASE_URL}star.svg`} alt="Star Icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>

                    <span>•</span>

                    {/* Movie language */}
                    <p className='lang'>{original_language}</p>

                    <span>•</span>

                    {/* Movie release year */}
                    <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard