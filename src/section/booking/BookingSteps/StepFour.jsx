import { useState } from 'react';
import RadioButton from '../../../components/shared/Button/RadioButton';
import { entrance } from '../../../util/services';

function StepFour({ handleChange, mockData }) {
  return (
    <div className="flex flex-col items-start  h-full">
      <h1 className="text-2xl text-gray-800 font-poppins font-semibold mb-6 text-center">
        How Do We Come In?
      </h1>
      {entrance.map((roomInfo) => (
        <div key={roomInfo.name} className="w-full">
          <RadioButton
            checked={mockData?.entranceMode === roomInfo.name}
            value={roomInfo.name}
            onChange={handleChange}
            names={roomInfo.name}
            name="entranceMode"
          />
        </div>
      ))}
    </div>
  );
}

export default StepFour;
