import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Book, Calendar, ArrowLeft } from 'lucide-react';
import { classData } from '../data/classData';

const ClassPage: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();
  
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <Link 
        to="/" 
        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>
      
      <div className={`
        p-6 rounded-lg mb-8 text-white
        ${classId === 'jss1' ? 'bg-blue-600' : 
          classId === 'jss2' ? 'bg-purple-600' : 'bg-green-600'}
      `}>
        <h1 className="text-3xl font-bold mb-3">{classLevel.name}</h1>
        <p className="opacity-90">
          {classId === 'jss1' 
            ? 'Fundamental ICT concepts, computer history, and basic operations. Students will learn about computer hardware, software, and introductory internet concepts.'
            : classId === 'jss2'
            ? 'Programming fundamentals, advanced hardware, and data management. Building on JSS 1 concepts, students explore logic gates, number systems, and spreadsheet applications.'
            : 'Database concepts, networking, and emerging technologies. Advanced topics preparing students for further studies in ICT.'}
        </p>
      </div>
      
      <div className="space-y-8">
        {classLevel.terms.map((term, termIndex) => (
          <section key={termIndex}>
            <div className="flex items-center mb-4">
              <Calendar className={`
                h-5 w-5 mr-2
                ${classId === 'jss1' ? 'text-blue-600' : 
                  classId === 'jss2' ? 'text-purple-600' : 'text-green-600'}
              `} />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{term.name}</h2>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {term.weeks.map((week, weekIndex) => (
                  <Link
                    key={weekIndex}
                    to={`/class/${classId}/term/${termIndex}/week/${weekIndex}`}
                    className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0 mr-3
                        ${classId === 'jss1' ? 'bg-blue-600' : 
                          classId === 'jss2' ? 'bg-purple-600' : 'bg-green-600'}
                      `}>
                        {week.number}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {week.topic.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                          {week.topic.overview}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ClassPage;