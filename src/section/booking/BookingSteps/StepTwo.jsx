import { useEffect, useState } from 'react';
import RadioButton from '../../../components/shared/Button/RadioButton';
import Pricing from '../../../util/pricing';
import { bedRooms } from '../../../util/services';

function StepTwo({ mockData, handleChange }) {
  const { serviceType } = mockData;
  const [serviceInfo, setServiceInfo] = useState([]);
  useEffect(() => {
    const result = Pricing.find((x) => x.name === serviceType);
    result && setServiceInfo([...result.services]);
    console.log(result);
  }, [serviceType]);

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl text-gray-800 font-poppins font-semibold mb-6 text-center">
        Select Specification
      </h1>
      {serviceInfo &&
        serviceInfo.map((service) => {
          console.log(service.type);

          return (
            <div key={service.id} className="w-full">
              <RadioButton
                checked={mockData?.info === service.type + '-' + service.price}
                value={service.type + '-' + service.price}
                onChange={handleChange}
                name="info"
                price={service.price}
                names={service.type}
              />
            </div>
          );
        })}
    </div>
  );
}

export default StepTwo;
