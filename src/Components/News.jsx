// News.jsx
import { FaStar, FaRegStar, FaEye, } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/animation/bookmark.json";
import shareIcon from '../assets/animation/shareIcon.json'



const News = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  // Format date (from ISO string)
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden my-5 ">
      {/* Header */}
      <div className="flex justify-between items-center px-4 bg-gray-100">
        <div className="flex items-center justify-center  gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover "
          />
          <div className="flex flex-col  leading-tight justify-center mt-3">
            <p className="text-sm font-semibold p-0 m-0">{author.name}</p>
            <p className="text-xs text-gray-500">{formatDate(author.published_date)}</p>
          </div>
        </div>
        <button className="flex items-center gap-3 text-gray-500 hover:text-gray-700">
     <div style={{ width: 50, height: 50 ,cursor:"pointer"}} >
      <Lottie animationData={animationData} loop autoplay />
    </div>
          <Lottie  style={{ width: 30, height: 30 ,cursor:"pointer"}}
           animationData={shareIcon} loop autoplay>
          </Lottie>
        </button>
      </div>

      {/* Title */}
      <h2 className=" p-3 font-bold text-md">{title}</h2>

      {/* Thumbnail */}
      <img src={thumbnail_url} alt={title} className="w-100 h-70 object-cover mt-2  p-3 pe-4" style={{borderRadius:"30px"}} />

      {/* Details */}
      <div className="px-4 py-4 text-gray-400 text-md">
        {details.length > 150 ? (
          <p className="text-var(--color-font-primarytext)">
            {details.slice(0, 250)}...{" "}
            <span className="cursor-pointer readbtn d-block mt-1">Read More</span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

         
      {/* Footer (Rating + Views) */}
      <div className="flex justify-between items-center py-3 border-t mx-4 text-gray-500 text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: 5 }).map((_, i) =>
            i < Math.round(rating.number) ? (
              <FaStar key={i} />
            ) : (
              <FaRegStar key={i} />
            )
          )}
          <span className="ml-2 text-gray-700">{rating.number.toFixed(1)}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
