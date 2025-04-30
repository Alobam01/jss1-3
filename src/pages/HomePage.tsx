import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Bookmark, BookOpen } from 'lucide-react';
import { classData } from '../data/classData';
import { useBookmarks } from '../context/BookmarkContext';

const HomePage: React.FC = () => {
  const { bookmarks } = useBookmarks();
  
  // Sort bookmarks by most recent
  const sortedBookmarks = [...bookmarks].sort((a, b) => b.timestamp - a.timestamp);
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ICT Mini-Book for JSS 1–3</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            Aligned with the Nigerian Educational Research and Development Council (NERDC) Curriculum
          </p>
          <p className="text-base md:text-lg opacity-80">
            This digital textbook provides a comprehensive guide to Information and Communication Technology (ICT)
            for Junior Secondary School students, covering all topics across three terms for each class.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            {classData.map((classLevel) => (
              <Link
                key={classLevel.id}
                to={`/class/${classLevel.id}`}
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105"
              >
                {classLevel.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {sortedBookmarks.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Bookmark className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Bookmarks</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedBookmarks.slice(0, 6).map((bookmark, index) => {
              const classLevel = classData.find(c => c.id === bookmark.classId);
              if (!classLevel) return null;
              
              const term = classLevel.terms[bookmark.termIndex];
              if (!term) return null;
              
              const week = term.weeks[bookmark.weekIndex];
              if (!week) return null;
              
              return (
                <Link
                  key={index}
                  to={`/class/${bookmark.classId}/term/${bookmark.termIndex}/week/${bookmark.weekIndex}`}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <Bookmark className="h-4 w-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {week.topic.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {classLevel.name} &bull; {term.name} &bull; Week {week.number}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        Bookmarked on {new Date(bookmark.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {sortedBookmarks.length > 6 && (
            <div className="mt-4 text-center">
              <Link
                to="/bookmarks"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                View all {sortedBookmarks.length} bookmarks
              </Link>
            </div>
          )}
        </section>
      )}
      
      <section className="mb-12">
        <div className="flex items-center mb-4">
          <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Class Overview</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classData.map((classLevel) => (
            <div key={classLevel.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className={`
                p-4 text-white font-semibold text-lg
                ${classLevel.id === 'jss1' ? 'bg-blue-600' : 
                  classLevel.id === 'jss2' ? 'bg-purple-600' : 'bg-green-600'}
              `}>
                {classLevel.name}
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {classLevel.id === 'jss1' 
                    ? 'Fundamental ICT concepts, computer history, and basic operations.'
                    : classLevel.id === 'jss2'
                    ? 'Programming fundamentals, advanced hardware, and data management.'
                    : 'Database concepts, networking, and emerging technologies.'}
                </p>
                
                <div className="space-y-2">
                  {classLevel.terms.map((term, termIndex) => (
                    <Link
                      key={termIndex}
                      to={`/class/${classLevel.id}/term/${termIndex}`}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Book className="h-4 w-4 mr-2" />
                      <span>{term.name} ({term.weeks.length} topics)</span>
                    </Link>
                  ))}
                </div>
                
                <Link
                  to={`/class/${classLevel.id}`}
                  className={`
                    mt-4 inline-block px-4 py-2 rounded-md text-white text-sm font-medium
                    ${classLevel.id === 'jss1' ? 'bg-blue-600 hover:bg-blue-700' : 
                      classLevel.id === 'jss2' ? 'bg-purple-600 hover:bg-purple-700' : 
                      'bg-green-600 hover:bg-green-700'}
                    transition-colors
                  `}
                >
                  Explore {classLevel.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About This Textbook</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This digital textbook provides a comprehensive guide to Information and Communication Technology (ICT) 
            for Junior Secondary School (JSS) 1-3, based on the Nigerian Educational Research and Development 
            Council (NERDC) curriculum.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            It covers all topics across three terms for each class, offering explanations, key points, and 
            practical activities to support learning. The content is designed for students, teachers, and 
            educators to facilitate teaching and understanding of ICT concepts.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
              NERDC Aligned
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">
              Interactive Learning
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">
              Comprehensive
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm">
              Three-Year Course
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;