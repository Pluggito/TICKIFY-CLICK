import { faTicket,faPeopleArrows,faWallet } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Features = () => {

  const feature = [ 
    {
        icon: faTicket, 
        title: "Online Ticketing and Registration", 
        description: "Offer a simple, easy-to-use platform for creating and selling event tickets online. Organizers can"
    },
    {
        icon: faPeopleArrows, 
        title: "Event Promotion and Social Sharing", 
        description: "Help event organizers reach their audience by providing social sharing tools and customizable event pages to spread the word."
    },
    {
        icon: faWallet, 
        title: "Simple Payment Processing", 
        description: "Facilitate smooth and secure payment processing so that ticket buyers can quickly complete purchases."
    }
];


  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-between text-center lg:grid-cols-3 mt-12 w-full h-auto py-20 gap-4 tracking-wide ">
        {feature.map((item,index)=>(
          <div key={index}
          className="w-3/4 ml-11 p-auto rounded-3xl cursor-pointer p-6 transition-all duration-500 hover:shadow-lg hover:scale-110">
            <FontAwesomeIcon 
            icon={item.icon}
            className="text-[35px] "
             />
            <p className="font-[Poppins] text-2xl text-[#b30d0d]  ">{item.title}</p>
            <p className="font-space text-gray-700 ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
