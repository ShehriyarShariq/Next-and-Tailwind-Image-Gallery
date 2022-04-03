import Image from "next/image";

const PhotoCard = ({ photo }) => {
  const Tag = ({ tag }) => (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      #{tag}
    </span>
  );

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
      <img src={photo.webformatURL} alt="Random Image" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {photo.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {photo.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {photo.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {photo.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {photo.tags.split(", ").map((tag, i) => (
          <Tag key={`tag_${i}`} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default PhotoCard;
