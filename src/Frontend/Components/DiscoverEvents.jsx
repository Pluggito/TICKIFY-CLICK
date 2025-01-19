import { useContext, useEffect } from "react";
import Section from "./Section";
import { TicketContext } from "../Context/TicketContext";
import TicketItems from './TicketItems';

const DiscoverEvents = ({setNewEvent, newEvent}) => {
  const { tickets } = useContext(TicketContext);
  

  useEffect(() => {
    
    setNewEvent(tickets.slice(0, 8));

  }, [tickets]);

  return (
    <div className="my-10 overflow-hidden max-w-7xl mx-auto">
      <Section section={"DISCOVER EVENTS"} />
      <div className="text-center">
        <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-700">
          Discover our latest events featuring breathtaking adventures
        </p>
      </div>

      {/* Rendering Event Tickets */}
      <div className="py-10 tracking-wider">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newEvent.map((event) => (
            <TicketItems
              key={event._id}
              id={event._id}
              name={event.name}
              image={event.image}
              description={event.description}
              price={event.price}
              date={event.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverEvents;
