 import { createContext } from "react";
import { tickets } from "../assets/asset";

export const TicketContext = createContext();

const TicketContextProvider = (props) => {
    const currency = '₦';
    const service_fee = 100;

    const value = {
        currency,
        service_fee,
        tickets
    };

    return (
        <TicketContext.Provider value={value}>
            {props.children}
        </TicketContext.Provider>
    );
};

export default TicketContextProvider; 
