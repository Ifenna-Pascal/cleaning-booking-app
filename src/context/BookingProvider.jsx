import { createContext, useState } from 'react';
export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const initialState = {
    serviceType: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    state: '',
    city: '',
    zip: '',
    date: '',
  };
  const [mockData, setMockData] = useState(initialState);
  const updateTotal = () => {};
  const handleChange = (e) => {
    setMockData({ ...mockData, [e.target.name]: e.target.value });
  };

  return (
    <BookingContext.Provider value={{ mockData, handleChange, updateTotal }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
