import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  url: string;
  category: string;
}

const resources: Resource[] = [
  {
    title: "W3Schools Computer Science",
    description: "Free computer science tutorials and references",
    url: "https://www.w3schools.com/cs/",
    category: "Learning Platforms"
  },
  {
    title: "Code.org",
    description: "Learn computer science fundamentals through interactive exercises",
    url: "https://code.org/",
    category: "Interactive Learning"
  },
  {
    title: "Khan Academy Computing",
    description: "Free computing education resources",
    url: "https://www.khanacademy.org/computing",
    category: "Educational Resources"
  },
  {
    title: "Computer Hope",
    description: "Free computer help and information",
    url: "https://www.computerhope.com/",
    category: "Reference"
  },
  {
    title: "BBC Bitesize Computer Science",
    description: "Educational resources for computer science students",
    url: "https://www.bbc.co.uk/bitesize/subjects/zvc9q6f",
    category: "Educational Resources"
  }
];

const OnlineResources: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Online Resources
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {resource.description}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
            </div>
            <div className="mt-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                {resource.category}
              </span>
            </div>
          </a>
        ))}
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mt-6">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          These resources are carefully selected to complement your learning journey. Remember to always verify
          information from multiple sources and stay updated with the latest in technology.
        </p>
      </div>
    </div>
  );
};

export default OnlineResources;