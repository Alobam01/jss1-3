import React from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { classData } from '../data/classData';

interface SearchResult {
  classId: string;
  className: string;
  termIndex: number;
  termName: string;
  weekIndex: number;
  weekNumber: number;
  topicTitle: string;
  matchedOn: string;
}

interface SearchResultsProps {
  searchTerm: string;
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchTerm, onClose }) => {
  const results = React.useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];
    
    const searchResults: SearchResult[] = [];
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    classData.forEach(classLevel => {
      classLevel.terms.forEach((term, termIndex) => {
        term.weeks.forEach((week, weekIndex) => {
          const matchInTitle = week.topic.title.toLowerCase().includes(lowerSearchTerm);
          const matchInOverview = week.topic.overview.toLowerCase().includes(lowerSearchTerm);
          const matchInKeyPoints = week.topic.keyPoints.some(point => 
            point.toLowerCase().includes(lowerSearchTerm)
          );
          const matchInActivity = week.topic.activity.toLowerCase().includes(lowerSearchTerm);
          
          if (matchInTitle || matchInOverview || matchInKeyPoints || matchInActivity) {
            let matchedOn = '';
            
            if (matchInTitle) matchedOn = 'title';
            else if (matchInOverview) matchedOn = 'overview';
            else if (matchInKeyPoints) matchedOn = 'key points';
            else if (matchInActivity) matchedOn = 'activity';
            
            searchResults.push({
              classId: classLevel.id,
              className: classLevel.name,
              termIndex,
              termName: term.name,
              weekIndex,
              weekNumber: week.number,
              topicTitle: week.topic.title,
              matchedOn
            });
          }
        });
      });
    });
    
    return searchResults;
  }, [searchTerm]);

  if (!searchTerm || searchTerm.length < 2) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center">
            <Search className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Search Results for "{searchTerm}"
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-1 p-4">
          {results.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">No results found for "{searchTerm}"</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Try using different keywords or check your spelling
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Found {results.length} {results.length === 1 ? 'result' : 'results'}
              </p>
              
              {results.map((result, index) => (
                <Link
                  key={index}
                  to={`/class/${result.classId}/term/${result.termIndex}/week/${result.weekIndex}`}
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={onClose}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {result.topicTitle}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {result.className} &bull; {result.termName} &bull; Week {result.weekNumber}
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {result.matchedOn}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-center">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;