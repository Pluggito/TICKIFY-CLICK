import bg1 from './Background_Image_2-Compressed.png'
import logo_img from './Tickfy_Logo_01-6_page-0001-removebg-preview.svg'
import google_icon from './google.svg'
import signup_image from './New Background Image.jpg'
import about_icon from './icons8-info.svg'
import home_icon from './icons8-home.svg'
import promote_icon from './icons8-ads-64.png'
import help_icon from './icons8-help-48.png'
import event_1 from './pexels-adnan55-886051.jpg'
import event_2 from './pexels-adrien-olichon-1257089-2823459.jpg'
import event_3 from './pexels-alex-andrews-271121-1203819.jpg'
import event_4 from './pexels-charlesdeluvio-2792602.jpg'
import event_5 from './pexels-charlotte-may-5824870.jpg'
import event_6 from './pexels-amin-sujan-529242-1375883.jpg'
import event_7 from './pexels-hiddencouple-3048527.jpg'
import event_8 from './pexels-jonathanborba-3727771.jpg'
import event_9 from './pexels-maumascaro-948199.jpg'
import event_10 from './pexels-oandremoura-2414936.jpg'
import event_11 from './pexels-pixabay-276092.jpg'
import event_12 from './pexels-sebastian-ervi-866902-1763075.jpg'
import event_13 from './pexels-jean-daniel-2570139.jpg'
import event_14 from './pexels-monica-713149.jpg'
import event_15 from './pexels-sulimansallehi-2128165.jpg'
import event_16 from './work 2.jpg'





export const assets = {
    bg1,
    logo_img,
    google_icon,
    signup_image,
    about_icon,
    promote_icon,
    help_icon,
    home_icon,
 }

 export const tickets = [
    {
        _id: "001",
        name: "Next Up1",
        description: "A thrilling concert experience.",
        price: "20,000",
        image: [event_12],
        category: "Concert",
        subCategory: "Rock",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-12-01",
    },
    {
        _id: "002",
        name: "Next Up2",
        description: "A fun-filled family event.",
        price: "15,000",
        image: [event_9],
        category: "Family",
        subCategory: "Festival",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-11-15",
    },
    {
        _id: "003",
        name: "Next Up3",
        description: "An exciting sports match.",
        price: "30,000",
        image: [event_13],
        category: "Sports",
        subCategory: "Football",
        ticketEntry: ["Regular", "VIP"],
        available: false,
        date: "2025-10-20",
    },
    {
        _id: "004",
        name: "Next Up4",
        description: "A captivating theater performance.",
        price: "25,000",
        image: [event_5],
        category: "Theater",
        subCategory: "Drama",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-09-30",
    },
    {
        _id: "005",
        name: "Next Up5",
        description: "A thrilling adventure park experience.",
        price: "18,000",
        image: [event_1],
        category: "Adventure",
        subCategory: "Theme Park",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-08-25",
    },
    {
        _id: "006",
        name: "Next Up6",
        description: "An immersive art exhibition.",
        price: "22,000",
        image: [event_4],
        category: "Art",
        subCategory: "Exhibition",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-07-15",
    },
    {
        _id: "007",
        name: "Next Up7",
        description: "A thrilling escape room experience.",
        price: "15,000",
        image: [event_11],
        category: "Adventure",
        subCategory: "Escape Room",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-06-10",
    },
    {
        _id: "008",
        name: "Next Up8",
        description: "A live comedy show.",
        price: "30,000",
        image: [event_14],
        category: "Comedy",
        subCategory: "Stand-Up",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-05-05",
    },
    {
        _id: "009",
        name: "Next Up9",
        description: "A classical music concert.",
        price: "40,000",
        image: [event_7],
        category: "Music",
        subCategory: "Classical",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-04-20",
    },
    {
        _id: "010",
        name: "Next Up10",
        description: "A thrilling horror movie screening.",
        price: "12,000",
        image: [event_8],
        category: "Movies",
        subCategory: "Horror",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-03-15",
    },
    {
        _id: "011",
        name: "Next Up11",
        description: "A magical circus experience.",
        price: "25,000",
        image: [event_3],
        category: "Circus",
        subCategory: "Live Show",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-02-10",
    },
    {
        _id: "012",
        name: "Next Up12",
        description: "A thrilling roller coaster ride.",
        price: "30,000",
        image: [event_15],
        category: "Amusement Park",
        subCategory: "Rides",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-01-05",
    },
    {
        _id: "013",
        name: "Next Up13",
        description: "A gourmet food festival.",
        price: "20,000",
        image: [event_10],
        category: "Food",
        subCategory: "Festival",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-12-12",
    },
    {
        _id: "014",
        name: "Next Up14",
        description: "A thrilling escape from reality.",
        price: "22,000",
        image: [event_2],
        category: "Adventure",
        subCategory: "Escape Room",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-11-30",
    },
    {
        _id: "015",
        name: "Next Up15",
        description: "A relaxing yoga retreat.",
        price: "15,000",
        image: [event_6],
        category: "Wellness",
        subCategory: "Retreat",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-10-25",
    },
    {
        _id: "016",
        name: "Next Up16",
        description: "An exciting tech conference.",
        price: "35,000",
        image: [event_16],
        category: "Conference",
        subCategory: "Tech",
        ticketEntry: ["Regular", "VIP"],
        available: true,
        date: "2025-09-15",
    },
];