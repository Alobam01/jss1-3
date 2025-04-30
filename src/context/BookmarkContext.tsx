import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { BookmarkItem } from '../types';

interface BookmarkContextType {
  bookmarks: BookmarkItem[];
  addBookmark: (bookmark: BookmarkItem) => void;
  removeBookmark: (bookmark: BookmarkItem) => void;
  isBookmarked: (classId: string, termIndex: number, weekIndex: number) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};

interface BookmarkProviderProps {
  children: ReactNode;
}

export const BookmarkProvider: React.FC<BookmarkProviderProps> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    const savedBookmarks = localStorage.getItem('ictTextbookBookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  useEffect(() => {
    localStorage.setItem('ictTextbookBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark: BookmarkItem) => {
    setBookmarks((prev) => [...prev, bookmark]);
  };

  const removeBookmark = (bookmark: BookmarkItem) => {
    setBookmarks((prev) => 
      prev.filter(
        (item) => 
          !(item.classId === bookmark.classId && 
            item.termIndex === bookmark.termIndex && 
            item.weekIndex === bookmark.weekIndex)
      )
    );
  };

  const isBookmarked = (classId: string, termIndex: number, weekIndex: number) => {
    return bookmarks.some(
      (bookmark) => 
        bookmark.classId === classId && 
        bookmark.termIndex === termIndex && 
        bookmark.weekIndex === weekIndex
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};