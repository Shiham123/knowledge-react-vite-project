import { FaBookmark } from 'react-icons/fa';

const BlogPage = (props) => {
  const { blog, handleAddBookmark } = props;

  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover} alt={title} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-16">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} Min Read</span>
          <button
            className="ml-2 text-2xl text-red-600"
            onClick={() => {
              handleAddBookmark(blog);
            }}
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <div className="text-4xl">{title}</div>
      <p>
        {hashtags.map((hash, index) => {
          <span key={index}>
            <a href="">{hash}</a>{' '}
          </span>;
        })}
      </p>
      <button className="text-purple-800 font-bold underline">
        Mark as Read
      </button>
    </div>
  );
};

export default BlogPage;
