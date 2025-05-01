export interface Topic {
  title: string;
  overview: string;
  keyPoints: string[];
  activity: string;
}

export interface Week {
  number: number;
  topic: Topic;
}

export interface Term {
  name: string;
  weeks: Week[];
}

export interface ClassLevel {
  id: string;
  name: string;
  terms: Term[];
}

export interface BookmarkItem {
  classId: string;
  termIndex: number;
  weekIndex: number;
  timestamp: number;
}

export interface CBTQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  classLevel: string;
  term: string;
  topic: string;
}

export interface CBTSection {
  id: string;
  title: string;
  description: string;
  questions: CBTQuestion[];
  timeLimit: number; // in minutes
  passingScore: number;
}