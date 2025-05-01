import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ICT Textbook for JSS1-3',
  description = 'Comprehensive ICT textbook for Junior Secondary School (JSS1-3) with detailed lessons, practical examples, and interactive CBT tests.',
  keywords = ['ICT', 'JSS1', 'JSS2', 'JSS3', 'Computer Studies', 'Junior Secondary School', 'CBT', 'Computer Based Test', 'Education', 'Nigeria'],
  author = 'Aiyohuyin Ewaen Patrick'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="robots" content="index, follow" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
  );
};

export default SEO; 