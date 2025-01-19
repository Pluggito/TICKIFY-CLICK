import { useContext, useEffect } from "react"
import { TicketContext } from "../Context/TicketContext"
import TicketItems from "../Components/TicketItems";
import Section from "../Components/Section";



const EventsCategory = ({newEvent, setNewEvent}) => {
  
  const {tickets} = useContext(TicketContext);
  
  
  useEffect(()=>{
  
    setNewEvent(tickets.slice(0,16));
    
  },[tickets])

  return (
    <div className="py-10 max-w-7xl mx-auto my-0 p-auto">
      <h2 className="text-center font-[Poppins] text-base">Events</h2>
      <p className="text-center text-gray-600">Explore our exciting range of events happening soon!</p>
      {newEvent.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newEvent.map((event, index)=>(
            <TicketItems 
            key={index}
            id={event._id}
            name={event.name}
            image={event.image}
            description={event.description}
            price={event.price}
            date={event.date}
          />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events available at this time.</p>
      )}
    </div>
  )
}

export default EventsCategory
