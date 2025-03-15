/**
 * Search Component
 * 
 * Provides a search input field for users to search for movies.
 * The component is controlled by the parent component.
 * 
 * @author Haian Ibrahim
 * @github https://github.com/hki98
 * @linkedin https://linkedin.com/in/haian-k-ibrahim
 * @email contact@haian.me
 */

import React from 'react'

/**
 * Search component for movie search functionality
 * 
 * @param {Object} props - Component props
 * @param {string} props.searchTerm - Current search term value
 * @param {Function} props.setSearchTerm - Function to update search term
 * @returns {JSX.Element} Rendered Search component
 */
const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='search'>
            <div>
                {/* Search icon */}
                <img src={`${import.meta.env.BASE_URL}search.svg`} alt="search" />

                {/* Search input field */}
                <input
                    type='text'
                    placeholder='Search through thousands of movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search