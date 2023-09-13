import Bookmark from './bookmark';

const Bookmarks = (props) => {
  const { bookmarks } = props;

  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
      <div>
        <h3 className="text-4xl">Reading Time</h3>
      </div>
      <h2 className="text-3xl text-center ">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, index) => {
        return <Bookmark key={index} bookmark={bookmark} />;
      })}
    </div>
  );
};

export default Bookmarks;
