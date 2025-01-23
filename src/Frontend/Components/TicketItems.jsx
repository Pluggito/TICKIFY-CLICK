import { useContext } from "react";
import { TicketContext } from "../Context/TicketContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const TicketItems = ({ id, name, image, date, description, price }) => {
  const { currency } = useContext(TicketContext);

  // Fallback values for props
  const fallbackImage = "/path/to/fallback-image.jpg"; // Replace with your fallback image path
  const defaultName = "Unnamed Event";
  const defaultDescription = "No description available";
  const defaultDate = "Date not specified";

  return (
    <Link
      className="block bg-inherit overflow-hidden hover:shadow-xl transition-shadow duration-500 ease-in rounded-lg px-5 "
      to={id ? `/tickets/${id}` : "#"}
    >
      {/* Image Section */}
      <div className="overflow-hidden px-3">
        <img
          className="hover:scale-110 transition-transform duration-300 ease-in-out h-40 w-full object-cover"
          src={
            Array.isArray(image) && image.length > 0
              ? image[0]
              : image || fallbackImage
          }
          alt={name || defaultName}
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 font-[Poppins]">
          {name || defaultName}
        </h3>
        <p className="text-sm text-gray-500 flex flex-row gap-2">
          <span><FontAwesomeIcon icon={faCalendar} className="text-black"/></span>{date || defaultDate}</p>
        <p className="text-sm text-gray-700 my-2 line-clamp-2">
          {description || defaultDescription}
        </p>
        {price ? (
          <p className="text-base font-bold text-gray-900">
            {currency}
            {price.toLocaleString()}
          </p>
        ) : (
          <p className="text-sm text-gray-500">Price not available</p>
        )}
        <div className="text-center">
          <button
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 w-full mt-3"
            disabled={!id}
          >
            {id ? "Buy Ticket" : "Unavailable"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TicketItems;
