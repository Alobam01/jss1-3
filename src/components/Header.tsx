import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Search } from 'lucide-react';

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="sticky top-0 z-20 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
          ICT Textbook for JSS 1-3
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
          <form onSubmit={handleSearchSubmit} className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
          </form>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;