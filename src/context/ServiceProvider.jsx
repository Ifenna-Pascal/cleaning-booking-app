import { services } from "../util/services";
import { createContext, useEffect, useState } from "react";
import { auth } from "../db/dbMethods";
import { onAuthStateChanged } from "firebase/auth";

export const ServiceContext = createContext();


export const ServiceProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState();
useEffect(() => {
    const sub = onAuthStateChanged(auth, user => setCurrentUser(user && user));
    return sub;
}, []);
const [serviceDetails, setServiceDetails] = useState({});
const getEachService = (id) => {
    setServiceDetails({...services.find(service => service.type === id)})
}

return (
    <ServiceContext.Provider value={{getEachService, serviceDetails, currentUser}} >
        {children}
    </ServiceContext.Provider>
)}