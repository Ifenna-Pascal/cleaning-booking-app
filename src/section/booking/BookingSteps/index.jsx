import RadioButton from '../../../components/shared/Button/RadioButton';
import Pricing from '../../../util/pricing';

function BookingIndexPage({ handleChange, mockData }) {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <h1 className="lg:text-xl text-base  text-gray-700  font-poppins font-semibold mb-6 text-center">
        Select Service
      </h1>
      {Pricing.map((service) => (
        <div key={service.id} className="w-full">
          <RadioButton
            checked={mockData?.serviceType === service.name}
            value={service.name}
            name="serviceType"
            onChange={handleChange}
            names={service.name}
            required
          />
        </div>
      ))}
    </div>
  );
}

export default BookingIndexPage;
