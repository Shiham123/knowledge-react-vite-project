const BlogPage = (props) => {
  const { blog } = props;
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
    </div>
  );
};

export default BlogPage;
