import React from 'react';
import { useParams } from 'react-router-dom';
import { classData } from '../data/classData';
import Breadcrumbs from '../components/Breadcrumbs';
import TopicContent from '../components/TopicContent';
import OnlineResources from '../components/OnlineResources';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopicPage: React.FC = () => {
  const { classId, termIndex: termIndexParam, weekIndex: weekIndexParam } = useParams<{ 
    classId: string; 
    termIndex: string; 
    weekIndex: string; 
  }>();
  
  if (!classId || !termIndexParam || !weekIndexParam) {
    return <div>Invalid parameters</div>;
  }
  
  const termIndex = parseInt(termIndexParam, 10);
  const weekIndex = parseInt(weekIndexParam, 10);
  
  const classLevel = classData.find(c => c.id === classId);
  if (!classLevel) return <div>Class not found</div>;
  
  const term = classLevel.terms[termIndex];
  if (!term) return <div>Term not found</div>;
  
  const week = term.weeks[weekIndex];
  if (!week) return <div>Week not found</div>;

  // Calculate previous and next topic links
  const hasPreviousTopic = weekIndex > 0;
  const hasNextTopic = weekIndex < term.weeks.length - 1;
  
  const previousTopicLink = hasPreviousTopic 
    ? `/class/${classId}/term/${termIndex}/week/${weekIndex - 1}`
    : termIndex > 0 
      ? `/class/${classId}/term/${termIndex - 1}/week/${classLevel.terms[termIndex - 1].weeks.length - 1}`
      : null;
      
  const nextTopicLink = hasNextTopic
    ? `/class/${classId}/term/${termIndex}/week/${weekIndex + 1}`
    : termIndex < classLevel.terms.length - 1
      ? `/class/${classId}/term/${termIndex + 1}/week/0`
      : null;
  
  const previousTopicTitle = hasPreviousTopic
    ? term.weeks[weekIndex - 1].topic.title
    : termIndex > 0 && classLevel.terms[termIndex - 1]
      ? classLevel.terms[termIndex - 1].weeks[classLevel.terms[termIndex - 1].weeks.length - 1].topic.title
      : null;
      
  const nextTopicTitle = hasNextTopic
    ? term.weeks[weekIndex + 1].topic.title
    : termIndex < classLevel.terms.length - 1 && classLevel.terms[termIndex + 1]
      ? classLevel.terms[termIndex + 1].weeks[0].topic.title
      : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <Breadcrumbs />
      
      <div className="mt-4">
        <TopicContent 
          topic={week.topic} 
          week={week.number} 
          classId={classId} 
          termIndex={termIndex} 
          weekIndex={weekIndex}
        />
      </div>
      
      <div className="mt-8">
        <OnlineResources />
      </div>
      
      <div className="flex justify-between mt-8 mb-6">
        {previousTopicLink ? (
          <Link
            to={previousTopicLink}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="max-w-[200px] truncate">{previousTopicTitle}</span>
          </Link>
        ) : (
          <div></div>
        )}
        
        {nextTopicLink ? (
          <Link
            to={nextTopicLink}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span className="max-w-[200px] truncate">{nextTopicTitle}</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TopicPage;