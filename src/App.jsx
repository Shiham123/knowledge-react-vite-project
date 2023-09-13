import { useState } from 'react';
import BlogsPage from './assets/components/blogs';
import Header from './assets/components/header';
import Bookmarks from './assets/components/bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const remainingBookmarks = bookmarks.filter((bookmark) => {
      bookmark.id !== id;
    });

    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header />
      <BlogsPage
        handleAddBookmark={handleAddBookmark}
        handleMarkAsRead={handleMarkAsRead}
      />
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
    </>
  );
}

export default App;
