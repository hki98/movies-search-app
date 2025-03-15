/**
 * Appwrite Integration Module
 * 
 * This module handles all interactions with the Appwrite backend service.
 * It provides functions for tracking search terms and retrieving trending movies
 * based on user search history.
 * 
 * @author Haian Ibrahim
 * @github https://github.com/hki98
 * @linkedin https://linkedin.com/in/haian-k-ibrahim
 * @email contact@haian.me
 */

import { Client, Databases, ID, Query } from "appwrite"

// Appwrite configuration from environment variables
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID

// Initialize Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

// Initialize Appwrite database service
const database = new Databases(client);

/**
 * Updates the search count for a given search term in Appwrite
 * If the search term exists, increments its count
 * If it doesn't exist, creates a new document with count = 1
 * 
 * @param {string} searchTerm - The term searched by the user
 * @param {object} movie - The first movie result from the search
 */
export const updateSearchCount = async (searchTerm, movie) => {
    try {
        // Check if the search term already exists in the database
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ]);

        if (result.documents.length > 0) {
            // If search term exists, increment its count
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1
            });
        } else {
            // If search term doesn't exist, create a new document
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }

    } catch (error) {
        console.log(error);
    }
}

/**
 * Retrieves the top 5 trending movies based on search count
 * 
 * @returns {Array} Array of trending movie documents from Appwrite
 */
export const getTrendingMovies = async () => {
    try {
        // Get the top 5 most searched movies
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc('count'),
        ]);

        return result.documents;

    } catch (error) {
        console.log(error);
        return [];
    }
}