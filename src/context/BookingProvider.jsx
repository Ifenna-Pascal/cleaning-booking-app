import { createContext, useState } from "react";
export const BookingContext  = createContext();

export const BookingProvider = ({children}) => {
const initialState = {
    serviceType: '',
    noOfBedRooms: {
        value: '',
        price: 0,
    },
    petsPresent: {
        value: '',
        price: 0
    },
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
            setMockData({...mockData, [e.target.name]: {value: e.target.value, price: parseInt(e.target.value) * 300}, total: mockData.noOfBedRooms.price + mockData.petsPresent.price})
            break;
        case "petsPresent":
            setMockData({...mockData, [e.target.name]: {value: e.target.value, price: (e.target.value === 'No' ? 1 : 2) * 200} , total:mockData.noOfBedRooms.price + mockData.petsPresent.price });
            break;
        default: 
            setMockData({ ...mockData, [e.target.name]: e.target.value }) 
    }
};

const updateTotal = (price, selected) => {
    console.log(parseInt(selected) * price)
    console.log(mockData.total)
    setMockData({...mockData, total: mockData.total + mockData.noOfBedRooms.price + mockData.petsPresent.price })
} 

return (
    <BookingContext.Provider value={{mockData, handleChange, updateTotal}}>
        {children}
    </BookingContext.Provider>
)

}

export default BookingProvider;