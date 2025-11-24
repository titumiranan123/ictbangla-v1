/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseRating = ({ course }: any) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmitReview = () => {
    setShowReviewModal(false);
    setRating(0);
    setComment('');
  };

  const renderStars = (forRating: number) => {
    const fullStars = Math.floor(forRating);
    const hasHalfStar = forRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className=" text-primary  text-[20px]" />
        ))}
        {hasHalfStar && (
          <FaStarHalfAlt className=" text-primary  text-[20px]" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className=" text-primary  text-[20px]" />
        ))}
      </div>
    );
  };

  const handleStarHover = (star: any, e: any) => {
    const starElement = e.currentTarget;
    const rect = starElement.getBoundingClientRect();
    const hoverX = e.clientX - rect.left;
    const starWidth = rect.width;
    
    if (hoverX < starWidth / 2) {
      setHoverRating(star - 0.5);
    } else {
      setHoverRating(star);
    }
  };

  const handleStarClick = (star: any, e: any) => {
    const starElement = e.currentTarget;
    const rect = starElement.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const starWidth = rect.width;
    
    if (clickX < starWidth / 2) {
      setRating(star - 0.5);
    } else {
      setRating(star);
    }
  };

  const renderInteractiveStars = () => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const isHovered = hoverRating >= star;
          const isHoveredHalf = hoverRating >= star - 0.5 && hoverRating < star;
          const isRated = rating >= star;
          const isRatedHalf = rating >= star - 0.5 && rating < star;

          const showFilled = hoverRating > 0 ? isHovered : isRated;
          const showHalf = hoverRating > 0 ? isHoveredHalf : isRatedHalf;

          return (
            <div 
              key={star}
              className="relative cursor-pointer"
              onMouseMove={(e) => handleStarHover(star, e)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={(e) => handleStarClick(star, e)}
            >
              {showFilled ? (
                <FaStar className=" text-primary  text-[24px]" />
              ) : showHalf ? (
                <FaStarHalfAlt className=" text-primary  text-[24px]" />
              ) : (
                <FaRegStar className=" text-primary  text-[24px]" />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      {course?.courseStatus !== "COMPLETE" && (
        <>
          <Buttons
            title="Give review"
            className=" easeInOut px-4 py-2 border border-primary  text-primary  rounded-md text-sm"
            hoverColor="#e27447"
            onClick={() => setShowReviewModal(true)}
          />
          
          {showReviewModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-xl mx-4">
                <h3 className="text-xl font-bold mb-4 text-[#131836]">Leave a Review</h3>
                
                <div className="mb-4">
                  <label className="block mb-2 text-[#585d69]">Rating:</label>
                  {renderInteractiveStars()}
                  <div className="mt-2 text-sm text-[#585d69]">
                    {rating > 0 ? (
                      <>
                        Selected: {rating} star{rating !== 1 ? 's' : ''}
                        {renderStars(rating)}
                      </>
                    ) : 'Click to rate (left side for half-star)'}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block mb-2 text-[#585d69]">Comment:</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Share your experience with this course..."
                    rows={4}
                  />
                </div>
                
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 border rounded hover:bg-gray-100 text-[#585d69]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitReview}
                    className="px-4 py-2  bg-primary text-white rounded hover:bg-[#d16536] disabled:opacity-50 transition-colors duration-200"
                    disabled={rating === 0}
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Buttons = ({ title, className, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={`${className} transition-colors duration-300`}
    >
      {title}
    </button>
  );
};

export default CourseRating;