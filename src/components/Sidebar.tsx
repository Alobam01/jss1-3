import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, ChevronDown, ChevronRight, Menu, X, User, Bookmark, ClipboardCheck, HelpCircle } from 'lucide-react';
import { classData } from '../data/classData';
import { cbtData } from '../data/cbtData';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [expandedClass, setExpandedClass] = useState<string | null>(null);
  const [expandedTerms, setExpandedTerms] = useState<{ [key: string]: boolean }>({});
  const [expandedCBT, setExpandedCBT] = useState<string | null>(null);
  const location = useLocation();

  const toggleClass = (classId: string) => {
    setExpandedClass(expandedClass === classId ? null : classId);
  };

  const toggleTerm = (classId: string, termIndex: number) => {
    const key = `${classId}-${termIndex}`;
    setExpandedTerms((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleCBT = (classId: string) => {
    setExpandedCBT(expandedCBT === classId ? null : classId);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      <aside 
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out z-40 w-72 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center space-x-2" onClick={() => {
            if (window.innerWidth < 768) {
              toggleSidebar();
            }
          }}>
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">ICT Textbook</span>
          </Link>
          <button className="md:hidden" onClick={toggleSidebar}>
            <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-1">
            <Link 
              to="/" 
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                isActive('/') 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleSidebar();
                }
              }}
            >
              Home
            </Link>

            <Link 
              to="/about-author" 
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                isActive('/about-author') 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleSidebar();
                }
              }}
            >
              <User className="h-4 w-4 mr-2" />
              About Author
            </Link>

            <Link 
              to="/bookmarks" 
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                isActive('/bookmarks') 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleSidebar();
                }
              }}
            >
              <Bookmark className="h-4 w-4 mr-2" />
              Bookmarks
            </Link>

            <Link 
              to="/how-to-use" 
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                isActive('/how-to-use') 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleSidebar();
                }
              }}
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              How to Use
            </Link>
            
            <div className="pt-4">
              <p className="px-4 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-2">
                Class Levels
              </p>
              
              {classData.map((classLevel) => (
                <div key={classLevel.id} className="mb-1">
                  <button
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-left transition-colors ${
                      expandedClass === classLevel.id 
                        ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' 
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => toggleClass(classLevel.id)}
                  >
                    <span>{classLevel.name}</span>
                    {expandedClass === classLevel.id ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedClass === classLevel.id && (
                    <div className="ml-4 mt-1 space-y-1">
                      {classLevel.terms.map((term, termIndex) => (
                        <div key={`${classLevel.id}-term-${termIndex}`}>
                          <button
                            className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-left text-sm transition-colors ${
                              expandedTerms[`${classLevel.id}-${termIndex}`]
                                ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white'
                                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                            }`}
                            onClick={() => toggleTerm(classLevel.id, termIndex)}
                          >
                            <span>{term.name}</span>
                            {expandedTerms[`${classLevel.id}-${termIndex}`] ? (
                              <ChevronDown className="h-3 w-3" />
                            ) : (
                              <ChevronRight className="h-3 w-3" />
                            )}
                          </button>
                          
                          {expandedTerms[`${classLevel.id}-${termIndex}`] && (
                            <div className="ml-4 mt-1 space-y-1">
                              {term.weeks.map((week, weekIndex) => (
                                <Link
                                  key={`${classLevel.id}-term-${termIndex}-week-${weekIndex}`}
                                  to={`/class/${classLevel.id}/term/${termIndex}/week/${weekIndex}`}
                                  className={`block px-4 py-1.5 text-sm rounded-md transition-colors ${
                                    isActive(`/class/${classLevel.id}/term/${termIndex}/week/${weekIndex}`)
                                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                                  }`}
                                  onClick={() => {
                                    if (window.innerWidth < 768) {
                                      toggleSidebar();
                                    }
                                  }}
                                >
                                  Week {week.number}: {week.topic.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="px-4 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-2">
                CBT Tests
              </p>
              
              {classData.map((classLevel) => (
                <div key={`cbt-${classLevel.id}`} className="mb-1">
                  <button
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-left transition-colors ${
                      expandedCBT === classLevel.id 
                        ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' 
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => toggleCBT(classLevel.id)}
                  >
                    <span>{classLevel.name} CBT</span>
                    {expandedCBT === classLevel.id ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedCBT === classLevel.id && (
                    <div className="ml-4 mt-1 space-y-1">
                      {cbtData
                        .filter(section => section.id.startsWith(classLevel.id))
                        .map(section => (
                          <Link
                            key={section.id}
                            to={`/cbt/${section.id}`}
                            className={`flex items-center px-4 py-1.5 text-sm rounded-md transition-colors ${
                              isActive(`/cbt/${section.id}`)
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                            }`}
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                toggleSidebar();
                              }
                            }}
                          >
                            <ClipboardCheck className="h-3 w-3 mr-2" />
                            {section.title}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </aside>
      
      {/* Mobile toggle button */}
      <button 
        className="fixed bottom-4 left-4 md:hidden z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  );
};

export default Sidebar;