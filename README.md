# 🎬 Next.js Movie Application 🍿

> A dynamic movie app built with [Next.js](https://nextjs.org/), TypeScript, and the [TMDB API](https://www.themoviedb.org/documentation/api) to fetch the latest movies, TV shows, and actors.

## 🚀 [Live Demo](https://rekcoob-movies.netlify.app)

## ✨ Features

- 🔥 Discover popular movies, TV shows, and actors
- ❤️ Save favorite movies to local storage
- 🔄 Infinite scroll for seamless browsing
- 📱 Fully responsive design

## 🛠️ TMDb API Setup

To connect the app to the TMDb API:

1. Create a `.env` file in the root directory.
2. Add your TMDb API key like this:

```bash
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

## ⚡ Quick Start

Follow these commands to run and build the project:

```bash
# Install Dependencies
npm install

# Run Development Server
npm dev

# Build for Production
npm build

# Start Production Server
npm start
```

<!-- ## 📂 Project Structure

- **`/components`** – Reusable components such as `Navbar`, `MovieCards`, etc.
- **`/pages`** – Next.js pages for routes like Home, Movie Details, and Search.
- **`/public`** – Static assets (including the 🍿 favicon).
- **`/styles`** – Global and component-specific SCSS styles.
- **`/utils`** – Utility functions and API service calls. -->

## 📝 Notes

- Built with 💙 using Next.js, TypeScript, and SCSS for modular styling.
- Uses local storage to keep favorite movies across sessions.
- Infinite scrolling is powered by TMDb’s pagination.

---

Built with 🍿 by [b0ock3r](https://rekcoob.github.io)
