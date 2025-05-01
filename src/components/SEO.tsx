import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ICT Textbook for JSS1-3',
  description = 'Comprehensive ICT textbook for  Secondary School (JSS1- ss3) with detailed lessons, practical examples, and interactive CBT tests.',
  keywords = ['ICT', 'JSS1', 'JSS2', 'JSS3','SS1', 'SS2', 'SS3', 'Computer Studies', ' Secondary School', 'CBT', 'Computer Based Test', 'Education', 'Nigeria'],
  author = 'Patotec Software Solutions',
  image = 'https://ictforsecondryschools.vercel.app/images/logo.png'
}) => {
  const siteUrl = window.location.origin;
  const fullImageUrl = `${siteUrl}${image}`;

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
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ICT Textbook Cover" />
      <meta property="og:site_name" content="ICT Textbook for JSS1-SS3" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="ICT Textbook Cover" />
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="robots" content="index, follow" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      
      {/* Additional image meta tags */}
      <link rel="image_src" href={fullImageUrl} />
      <meta name="image" content={fullImageUrl} />
      <meta itemProp="image" content={fullImageUrl} />
    </Helmet>
  );
};

export default SEO; 