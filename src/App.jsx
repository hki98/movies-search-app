/**
 * Movie Search Application
 * 
 * This application allows users to search for movies using The Movie Database (TMDB) API
 * and displays trending movies based on user search history stored in Appwrite.
 * 
 * @author Haian Ibrahim
 * @github https://github.com/hki98
 * @linkedin https://linkedin.com/in/haian-k-ibrahim
 * @email contact@haian.me
 */

import React from 'react'
import { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'
import { useDebounce } from 'react-use'
import { getTrendingMovies, updateSearchCount } from './appwrite'

// TMDB API configuration
const API_BASE_URL = 'https://api.themoviedb.org/3';

// API key from environment variables
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

// API request options for TMDB
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {
  // State management
  const [searchTerm, setSearchTerm] = useState(''); // Current search input
  const [errorMessage, setErrorMessage] = useState(''); // Error messages
  const [movieList, setMovieList] = useState([]); // List of movies from search results
  const [trendingMovies, setTrendingMovies] = useState([]); // Trending movies from Appwrite
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [debounceSearchTerm, setDebounceSearchTerm] = useState(''); // Debounced search term to reduce API calls

  // Debounce search term to avoid excessive API calls
  useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

  /**
   * Fetches movies from TMDB API based on search query
   * If query is empty, fetches popular movies
   * Updates search count in Appwrite for analytics
   * 
   * @param {string} query - Search term
   */
  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Determine endpoint based on whether there's a search query
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if (data.response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      // Update search count in Appwrite if search returned results
      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * Loads trending movies from Appwrite database
   * These are based on most frequent user searches
   */
  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  }

  // Fetch movies when debounced search term changes
  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);

  // Load trending movies on component mount
  useEffect(() => {
    loadTrendingMovies();
  }, []);

  // Style for the background pattern
  const patternStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    zIndex: 0
  };

  return (
    <main>
      <div style={patternStyle} />

      <div className='wrapper'>
        {/* Header section with search functionality */}
        <header>
          <img src={`${import.meta.env.BASE_URL}hero.png`} alt='Hero Banner' />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {/* Trending movies section */}
        {trendingMovies.length > 0 && (
          <section className='trending'>
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* All movies section - displays search results or popular movies */}
        <section className='all-movies'>
          <h2>All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className='tetx-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>

      </div>
    </main>
  )
}

export default App