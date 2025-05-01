import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Book, BookOpen, ClipboardCheck } from 'lucide-react';
import { classData } from '../data/classData';

const TermPage: React.FC = () => {
  const { classId, termIndex: termIndexParam } = useParams<{ classId: string; termIndex: string }>();
  
  if (!classId || !termIndexParam) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Term not found</h2>
        <Link 
          to="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Go back to home
        </Link>
      </div>
    );
  }
  
  const termIndex = parseInt(termIndexParam, 10);
  const classLevel = classData.find(c => c.id === classId);
  
  if (!classLevel) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Class not found</h2>
        <Link 
          to="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Go back to home
        </Link>
      </div>
    );
  }
  
  const term = classLevel.terms[termIndex];
  
  if (!term) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Term not found</h2>
        <Link 
          to={`/class/${classId}`} 
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Go back to {classLevel.name}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <nav className="flex items-center mb-6">
        <Link 
          to="/" 
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </Link>
        <span className="mx-2 text-gray-400 dark:text-gray-600">/</span>
        <Link 
          to={`/class/${classId}`} 
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {classLevel.name}
        </Link>
        <span className="mx-2 text-gray-400 dark:text-gray-600">/</span>
        <span className="text-gray-900 dark:text-white font-medium">
          {term.name}
        </span>
      </nav>
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {classLevel.name} - {term.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {term.weeks.length} weekly topics
        </p>
      </header>
      
      <div className="grid grid-cols-1 gap-4">
        {term.weeks.map((week, weekIndex) => (
          <Link
            key={weekIndex}
            to={`/class/${classId}/term/${termIndex}/week/${weekIndex}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          >
            <div className="flex items-start">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-medium flex-shrink-0 mr-4
                ${classId === 'jss1' ? 'bg-blue-600' : 
                  classId === 'jss2' ? 'bg-purple-600' : 'bg-green-600'}
              `}>
                {week.number}
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {week.topic.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {week.topic.overview}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>
                    {week.topic.keyPoints.length} key point{week.topic.keyPoints.length !== 1 ? 's' : ''}
                  </span>
                  
                  <span className="mx-2">•</span>
                  
                  <Book className="h-4 w-4 mr-1" />
                  <span>1 activity</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CBT Button */}
      <div className="mt-8 text-center">
        <Link
          to={`/cbt/${classId}-${term.name.toLowerCase().replace(' ', '-')}`}
          className={`
            inline-flex items-center px-6 py-3 rounded-lg text-white font-medium
            ${classId === 'jss1' ? 'bg-blue-600 hover:bg-blue-700' : 
              classId === 'jss2' ? 'bg-purple-600 hover:bg-purple-700' : 
              'bg-green-600 hover:bg-green-700'}
            transition-colors
          `}
        >
          <ClipboardCheck className="h-5 w-5 mr-2" />
          Take {classLevel.name} {term.name} CBT Test
        </Link>
      </div>
    </div>
  );
};

export default TermPage;