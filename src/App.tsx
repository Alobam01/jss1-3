import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { BookmarkProvider } from './context/BookmarkContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ClassPage from './pages/ClassPage';
import TermPage from './pages/TermPage';
import TopicPage from './pages/TopicPage';
import BookmarksPage from './pages/BookmarksPage';
import AboutAuthor from './pages/AboutAuthor';
import SearchResults from './components/SearchResults';
import CBTPage from './pages/CBTPage';
import HowToUse from './pages/HowToUse';
import SEO from './components/SEO';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setShowSearchResults(true);
  };

  const closeSearchResults = () => {
    setShowSearchResults(false);
  };

  return (
    <HelmetProvider>
      <ThemeProvider>
        <BookmarkProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <Router>
              <SEO />
              <div className="flex">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                
                <div className="flex-1 md:pl-72">
                  <Header onSearch={handleSearch} />
                  
                  <main>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/class/:classId" element={<ClassPage />} />
                      <Route path="/class/:classId/term/:termIndex" element={<TermPage />} />
                      <Route path="/class/:classId/term/:termIndex/week/:weekIndex" element={<TopicPage />} />
                      <Route path="/bookmarks" element={<BookmarksPage />} />
                      <Route path="/about-author" element={<AboutAuthor />} />
                      <Route path="/cbt/:sectionId" element={<CBTPage />} />
                      <Route path="/how-to-use" element={<HowToUse />} />
                    </Routes>
                  </main>
                </div>
              </div>
              
              {showSearchResults && (
                <SearchResults 
                  searchTerm={searchTerm} 
                  onClose={closeSearchResults} 
                />
              )}
            </Router>
          </div>
        </BookmarkProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;