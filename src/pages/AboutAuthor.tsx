import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, Mail, Globe, MessageCircle } from 'lucide-react';

const AboutAuthor: React.FC = () => {
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Aiyohuyin Ewaen Patrick
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Full Stack Developer
          </p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              I am a passionate Full Stack Developer with over 3 years of experience in building web applications
              and digital solutions. Currently serving as an NYSC corps member in Otukpo, Benue State, Nigeria,
              I bring expertise in both frontend and backend development to create comprehensive digital experiences.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Professional Experience
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Over 3 years of full-stack development experience</li>
              <li>Expertise in modern web technologies and frameworks</li>
              <li>Strong background in building scalable applications</li>
              <li>Experience in both frontend and backend development</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Current Role
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              As an NYSC corps member in Otukpo, Benue State, I contribute to the technological development
              of the region while gaining valuable experience in the Nigerian tech ecosystem.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Contact & Social
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/patotec" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ewaen-aiyohuyin-a480a11aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
              <a href="mailto:ewaenpatrick5@gmail.com"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
              <a href="https://code-patotec.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Globe className="h-5 w-5 mr-2" />
                Portfolio
              </a>
              <a href="https://wa.me/2347010453280/" target="_blank" rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <MessageCircle className="h-5 w-5 mr-2" />
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;