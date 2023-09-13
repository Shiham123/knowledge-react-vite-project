import { useState } from 'react';
import BlogsPage from './assets/components/blogs';
import Header from './assets/components/header';
import Bookmarks from './assets/components/bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header />
      <BlogsPage handleAddBookmark={handleAddBookmark} />
      <Bookmarks bookmarks={bookmarks} />
    </>
  );
}

export default App;
