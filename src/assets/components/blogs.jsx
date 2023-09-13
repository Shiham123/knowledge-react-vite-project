import { useEffect, useState } from 'react';
import BlogPage from './blog';

const BlogsPage = (props) => {
  const { handleAddBookmark, handleMarkAsRead } = props;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/public/blogs.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs : {blogs.length}</h1>
      {blogs.map((blog) => {
        const { id } = blog;
        return (
          <BlogPage
            key={id}
            blog={blog}
            handleAddBookmark={handleAddBookmark}
            handleMarkAsRead={handleMarkAsRead}
          />
        );
      })}
    </div>
  );
};

export default BlogsPage;
