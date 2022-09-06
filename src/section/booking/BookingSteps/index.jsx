import RadioButton from '../../../components/shared/Button/RadioButton';
import { services } from '../../../util/services'

function BookingIndexPage({ handleChange, mockData }) {
  
  return (
    <div className='flex flex-col items-start w-full h-full'>
      <h1 className='text-2xl text-gray-800  font-poppins font-semibold mb-6 text-center'>Our Services</h1>
      {
        
        
        services.slice(1).map(service => (

          <div key={service.id} className="w-full">
            {console.log(mockData?.serviceType )}
            <RadioButton
              checked={mockData?.serviceType === service.name}
              value={service.name}
              name='serviceType'
              onChange={handleChange}
              names={service.name}
              required
            />
          </div>
        ))}
  </div>
  )
 }

export default BookingIndexPage