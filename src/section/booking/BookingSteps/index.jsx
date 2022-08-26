import React, { useState } from 'react'
import RadioButton from '../../../components/shared/Button/RadioButton';
import { services } from '../../../util/services'

function BookingIndexPage() {
  const [selected, setSelected] = useState(null);
  const handleChange = (e) => setSelected(e.target.value);

  return (
    <div className='flex flex-col items-start w-full h-full'>
      <h1 className='text-2xl text-gray-800  font-poppins font-semibold mb-6 text-center'>Our Services</h1>
      {
        services.slice(1).map(service => (
          <div key={service.id} className="w-full">
            <RadioButton
              checked={selected === service.type}
              value={service.type}
              onChange={handleChange}
              name={service.name}
            />
          </div>
        ))
      }
    </div>
  )
}

export default BookingIndexPage