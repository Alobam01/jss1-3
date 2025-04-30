import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowLeft, Trash2 } from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';
import { classData } from '../data/classData';

const BookmarksPage: React.FC = () => {
  const { bookmarks, removeBookmark } = useBookmarks();
  
  // Sort bookmarks by most recent
  const sortedBookmarks = [...bookmarks].sort((a, b) => b.timestamp - a.timestamp);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <Link 
        to="/" 
        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Bookmarks</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {bookmarks.length} saved topic{bookmarks.length !== 1 ? 's' : ''}
        </p>
      </header>
      
      {bookmarks.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No bookmarks yet</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You haven't bookmarked any topics. Click the bookmark icon on a topic page to save it for later.
          </p>
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            Explore Topics
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedBookmarks.map((bookmark, index) => {
            const classLevel = classData.find(c => c.id === bookmark.classId);
            if (!classLevel) return null;
            
            const term = classLevel.terms[bookmark.termIndex];
            if (!term) return null;
            
            const week = term.weeks[bookmark.weekIndex];
            if (!week) return null;
            
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-4 flex"
              >
                <div className="flex-grow">
                  <div className="flex items-center">
                    <Bookmark className="h-4 w-4 text-yellow-500 mr-2" />
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {week.topic.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 line-clamp-2">
                    {week.topic.overview}
                  </p>
                  
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 mt-3">
                    <span>{classLevel.name}</span>
                    <span className="mx-1">•</span>
                    <span>{term.name}</span>
                    <span className="mx-1">•</span>
                    <span>Week {week.number}</span>
                    <span className="mx-1">•</span>
                    <span>Bookmarked on {new Date(bookmark.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Link
                    to={`/class/${bookmark.classId}/term/${bookmark.termIndex}/week/${bookmark.weekIndex}`}
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                  >
                    View
                  </Link>
                  
                  <button
                    onClick={() => removeBookmark(bookmark)}
                    className="p-1.5 text-gray-500 hover:text-red-500 transition-colors"
                    aria-label="Remove bookmark"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;