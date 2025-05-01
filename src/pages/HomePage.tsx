import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, ClipboardCheck } from 'lucide-react';
import { classData } from '../data/classData';
import { cbtData } from '../data/cbtData';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Comprehensive ICT Textbook
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          A complete ICT curriculum for Junior Secondary School (JSS1 - JSS3)
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          This comprehensive ICT textbook covers all essential topics for Junior Secondary School students, 
          providing detailed lessons, practical examples, and interactive CBT tests to enhance learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {classData.map((classLevel) => (
          <div key={classLevel.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className={`p-6 ${
              classLevel.id === 'jss1' ? 'bg-blue-600' :
              classLevel.id === 'jss2' ? 'bg-purple-600' :
              'bg-green-600'
            } text-white`}>
              <h2 className="text-2xl font-bold">{classLevel.name}</h2>
              <p className="text-blue-100">Junior Secondary School</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Curriculum Content
              </h3>
              <ul className="space-y-2 mb-6">
                {classLevel.terms.map((term, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    {term.name}
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <Link
                  to={`/class/${classLevel.id}/term/0`}
                  className={`block w-full text-center py-2 px-4 rounded-md transition-colors ${
                    classLevel.id === 'jss1' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800' :
                    classLevel.id === 'jss2' ? 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800' :
                    'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800'
                  }`}
                >
                  <BookOpen className="h-4 w-4 inline-block mr-2" />
                  View Class Content
                </Link>
                
                <div className="space-y-2">
                  {cbtData
                    .filter(section => section.id.startsWith(classLevel.id))
                    .map(section => (
                      <Link
                        key={section.id}
                        to={`/cbt/${section.id}`}
                        className={`block w-full text-center py-2 px-4 rounded-md transition-colors ${
                          classLevel.id === 'jss1' ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-800/50 dark:text-blue-200 dark:hover:bg-blue-800' :
                          classLevel.id === 'jss2' ? 'bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-800/50 dark:text-purple-200 dark:hover:bg-purple-800' :
                          'bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-800/50 dark:text-green-200 dark:hover:bg-green-800'
                        }`}
                      >
                        <ClipboardCheck className="h-4 w-4 inline-block mr-2" />
                        {section.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          About This Textbook
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Comprehensive Coverage
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 mr-3">
                  1
                </span>
                <span>Complete ICT curriculum for JSS1 to JSS3</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 mr-3">
                  2
                </span>
                <span>Detailed lessons with practical examples</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 mr-3">
                  3
                </span>
                <span>Interactive CBT tests for each term</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 mr-3">
                  1
                </span>
                <span>Easy-to-follow lesson structure</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 mr-3">
                  2
                </span>
                <span>Progress tracking and assessment tools</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 mr-3">
                  3
                </span>
                <span>Bookmark system for important topics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;