import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { classData } from '../data/classData';

const Breadcrumbs: React.FC = () => {
  const { classId, termIndex: termIndexParam, weekIndex: weekIndexParam } = useParams();
  
  if (!classId || !termIndexParam || !weekIndexParam) {
    return null;
  }
  
  const termIndex = parseInt(termIndexParam, 10);
  const weekIndex = parseInt(weekIndexParam, 10);
  
  const classLevel = classData.find(c => c.id === classId);
  if (!classLevel) return null;
  
  const term = classLevel.terms[termIndex];
  if (!term) return null;
  
  const week = term.weeks[weekIndex];
  if (!week) return null;

  return (
    <nav className="text-sm px-4 md:px-6 py-3 flex items-center overflow-x-auto whitespace-nowrap">
      <Link
        to="/"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Home
      </Link>
      
      <ChevronRight className="mx-2 h-4 w-4 text-gray-400 dark:text-gray-600" />
      
      <Link
        to={`/class/${classId}`}
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {classLevel.name}
      </Link>
      
      <ChevronRight className="mx-2 h-4 w-4 text-gray-400 dark:text-gray-600" />
      
      <Link
        to={`/class/${classId}/term/${termIndex}`}
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {term.name}
      </Link>
      
      <ChevronRight className="mx-2 h-4 w-4 text-gray-400 dark:text-gray-600" />
      
      <span className="text-gray-900 dark:text-white font-medium">
        Week {week.number}: {week.topic.title}
      </span>
    </nav>
  );
};

export default Breadcrumbs;