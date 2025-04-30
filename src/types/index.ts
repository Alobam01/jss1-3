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