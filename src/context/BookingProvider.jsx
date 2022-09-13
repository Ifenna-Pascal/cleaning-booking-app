import { createContext, useState } from "react";
export const BookingContext  = createContext();

export const BookingProvider = ({children}) => {
const initialState = {
    serviceType: '',
    noOfBedRooms: '',
    petsPresent: '',
    entranceMode: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    apt: '',
    state: '',
    city: '',
    zip: '',
    date: '',
    total: 0
};
const [mockData, setMockData] = useState(initialState);
const handleChange = (e) => {
    // setMockData({ ...mockData, [e.target.name]: e.target.value })
    // if(e.target.name === 'noOfBedRooms'){
    //     // update total     
    //     setMockData({...mockData, [e.target.name]: e.target.value ,total: parseInt(e.target.value) * 300})
    // }
    switch (e.target.name) {
        case  "noOfBedRooms" :
            setMockData({...mockData, [e.target.name]: e.target.value ,total: mockData.total + parseInt(e.target.value) * 300})
            break;
        case "petsPresent":
            setMockData({...mockData, [e.target.name]: e.target.value ,total: mockData.total + 200});
            break;
        default: 
            setMockData({ ...mockData, [e.target.name]: e.target.value }) 
    }
};

return (
    <BookingContext.Provider value={{mockData, handleChange}}>
        {children}
    </BookingContext.Provider>
)

}

export default BookingProvider;