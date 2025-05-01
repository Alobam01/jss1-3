import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ClipboardCheck, Bookmark, User, ChevronRight } from 'lucide-react';

const HowToUse: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <Link 
        to="/" 
        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          How to Use ICT Textbook
        </h1>
        
        <div className="space-y-8">
          {/* Navigation Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Home Page</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    The home page provides an overview of all available class levels (JSS1, JSS2, JSS3). 
                    Click on any class level to view its content and CBT tests.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Class Content</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Each class level contains three terms. Navigate through terms and weeks to access specific topics.
                    The content is organized in a hierarchical structure for easy navigation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CBT Tests Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              CBT Tests
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ClipboardCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Taking Tests</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Each class level has corresponding CBT tests. Tests are timed (30 minutes) and consist of 30 questions.
                    Select your answers and click "Next" to proceed. Your score will be displayed upon completion.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ChevronRight className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Test Features</h3>
                  <ul className="mt-1 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                    <li>Timer display showing remaining time</li>
                    <li>Progress indicator showing current question</li>
                    <li>Option to review answers before submission</li>
                    <li>Detailed results with correct answers and explanations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Features Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Additional Features
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Bookmark className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bookmarks</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Save important pages or topics for quick access later. Use the bookmark icon to add or remove bookmarks.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">About Author</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Learn more about the author and their background in ICT education.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Tips for Best Experience
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                  1
                </span>
                <span className="ml-3">Use the sidebar navigation for quick access to all sections</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                  2
                </span>
                <span className="ml-3">Bookmark important topics for easy reference</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
                <span className="ml-3">Take CBT tests after completing each term's content</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                  4
                </span>
                <span className="ml-3">Review test explanations to understand correct answers</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowToUse; 