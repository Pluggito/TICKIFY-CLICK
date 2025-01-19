import { useContext } from "react";
import { TicketContext } from "../Context/TicketContext";
import { Link } from "react-router-dom";

const TicketItems = ({ id, name, image, date, description, price }) => {
  const { currency } = useContext(TicketContext);

  return (
    <Link
      className="block bg-inherit overflow-hidden hover:shadow-xl transition-shadow duration-500 ease-in rounded-lg"
      to={`/tickets/${id}`}
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition-transform duration-300 ease-in-out h-40 w-full object-cover"
          src={Array.isArray(image) ? image[0] : image}
          alt={name || "Event"}
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 font-[Poppins]">{name}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-700 my-2 line-clamp-2">{description}</p>
        <p className="text-base font-bold text-gray-900">
          {currency}
          {price.toLocaleString()}
        </p>
        <div className="text-center">
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300 w-full mt-3">
            Buy Ticket
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TicketItems;
