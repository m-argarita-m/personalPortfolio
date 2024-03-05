import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import BooksPage from './pages/BooksPage';
import TVMoviesPage from './pages/TVMoviesPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div style={{ margin: 0, padding: 0, width: '100%' }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/tv-movies" element={<TVMoviesPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;