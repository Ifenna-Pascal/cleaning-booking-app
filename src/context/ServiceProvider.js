import { services } from "../util/services";
import { createContext, useState } from "react";

export const ServiceContext = createContext();


export const ServiceProvider = ({children}) => {
const [serviceDetails, setServiceDetails] = useState({});
const getEachService = (id) => {
    setServiceDetails({...services.find(service => service.type === id)})
}

return (
    <ServiceContext.Provider value={{getEachService, serviceDetails}} >
        {children}
    </ServiceContext.Provider>
)}