import Section from "./Section"


const Preference = () => {
    const text = `We don't just sell tickets—we create unforgettable experiences. No more hassle with complicated systems. Our platform is built for the modern event-goer, offering quick, secure, and seamless ticketing solutions. Whether you're here for the hottest concert in town or a low-key event, we've got your back.`;

  return (
    <div>
      <Section section={'WHY TICKIFY'}/>
    <div className="flex items-center text-center text-gray-700 justify-center px-5 max-w-7xl m-auto">
    <h1 className="text-xl font-space font-semibold ">{text}</h1>

    </div>
     
    </div>
  )
}

export default Preference
