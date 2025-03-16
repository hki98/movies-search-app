# 🎬 Movies Search App

<div align="center">
  <img src="public/hero.png" alt="Movies Search App Banner" width="600px" />
  <br />
  <br />
  <p>
    <a href="https://haian.me/demo/movies-app/" target="_blank"><strong>✨ Live Demo</strong></a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#author">Author</a> •
    <a href="#license">License</a>
  </p>
  <br />
</div>

A modern React application that allows users to search for movies using The Movie Database (TMDB) API and displays trending movies based on user search history stored in Appwrite.

## ✨ Features

- 🔍 **Search Movies** - Find movies using TMDB's extensive database
- 📈 **Trending Movies** - View popular movies based on search history
- 📱 **Responsive Design** - Optimized for all devices
- 🔄 **Real-time Updates** - Instant search results with debouncing
- 🔐 **Backend Integration** - Secure data storage with Appwrite

## 🛠️ Tech Stack

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDB API" />
</div>

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/hki98/movies-search-app.git
   cd movies-search-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📸 Screenshots

<div align="center">
  <img src="public/hero.png" alt="Movies Search App Screenshot" width="80%" />
</div>

## 👨‍💻 Author

<div align="center">
  <img src="https://github.com/hki98.png" width="100px" style="border-radius: 50%;" alt="Haian Ibrahim" />
  <h3>Haian Ibrahim</h3>
  <p>
    <a href="https://github.com/hki98"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
    <a href="https://linkedin.com/in/haian-k-ibrahim"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="mailto:contact@haian.me"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  </p>
</div>

## 💎 NOTICE
<h3 align="center">This app has been built as an educational material following the awesome tutorial by: <a href="https://www.youtube.com/@javascriptmastery" target="_blank" title="JavaScript Mastery YouTube Channel">JSM</h3>

## 📄 License

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT License" />
</div>

<br />

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Haian Ibrahim
