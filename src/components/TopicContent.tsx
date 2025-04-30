import React, { useState } from 'react';
import { Bookmark, CheckCircle2, BookmarkMinus, ChevronDown, ChevronUp } from 'lucide-react';
import { Topic } from '../types';
import { useBookmarks } from '../context/BookmarkContext';

interface TopicContentProps {
  topic: Topic;
  week: number;
  classId: string;
  termIndex: number;
  weekIndex: number;
}

const TopicContent: React.FC<TopicContentProps> = ({ 
  topic, 
  week, 
  classId, 
  termIndex, 
  weekIndex 
}) => {
  const [isKeyPointsOpen, setIsKeyPointsOpen] = useState(true);
  const [isActivityOpen, setIsActivityOpen] = useState(true);
  const [isCompleted, setIsCompleted] = useState(() => {
    const savedCompletions = localStorage.getItem('ictTextbookCompletions');
    if (!savedCompletions) return false;
    
    const completions = JSON.parse(savedCompletions);
    const key = `${classId}-${termIndex}-${weekIndex}`;
    return completions[key] || false;
  });
  
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const bookmarked = isBookmarked(classId, termIndex, weekIndex);

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark({ classId, termIndex, weekIndex, timestamp: Date.now() });
    } else {
      addBookmark({ classId, termIndex, weekIndex, timestamp: Date.now() });
    }
  };

  const toggleCompletion = () => {
    const newCompletionStatus = !isCompleted;
    setIsCompleted(newCompletionStatus);
    
    // Save to localStorage
    const savedCompletions = localStorage.getItem('ictTextbookCompletions');
    const completions = savedCompletions ? JSON.parse(savedCompletions) : {};
    const key = `${classId}-${termIndex}-${weekIndex}`;
    
    completions[key] = newCompletionStatus;
    localStorage.setItem('ictTextbookCompletions', JSON.stringify(completions));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-fadeIn">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Week {week}: {topic.title}
        </h1>
        
        <div className="flex space-x-2">
          <button 
            onClick={toggleBookmark}
            className={`p-2 rounded-full ${
              bookmarked 
                ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300' 
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            } hover:bg-opacity-80 transition-colors`}
            aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {bookmarked ? (
              <BookmarkMinus className="h-5 w-5" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </button>
          
          <button 
            onClick={toggleCompletion}
            className={`p-2 rounded-full ${
              isCompleted 
                ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' 
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            } hover:bg-opacity-80 transition-colors`}
            aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
          >
            <CheckCircle2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="mt-4 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>{topic.overview}</p>
      </div>
      
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg mb-2"
          onClick={() => setIsKeyPointsOpen(!isKeyPointsOpen)}
        >
          <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300">Key Points</h2>
          <button className="text-blue-500 dark:text-blue-400">
            {isKeyPointsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
        
        {isKeyPointsOpen && (
          <div className="pl-4 py-2 space-y-2 animate-slideDown">
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {topic.keyPoints.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div>
        <div 
          className="flex items-center justify-between cursor-pointer bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg mb-2"
          onClick={() => setIsActivityOpen(!isActivityOpen)}
        >
          <h2 className="text-lg font-semibold text-orange-700 dark:text-orange-300">Activity</h2>
          <button className="text-orange-500 dark:text-orange-400">
            {isActivityOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
        
        {isActivityOpen && (
          <div className="bg-orange-50/50 dark:bg-orange-900/10 p-4 rounded-lg mt-2 animate-slideDown">
            <p className="text-gray-700 dark:text-gray-300">{topic.activity}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicContent;