import { useState } from 'react';
import { updateDocument } from '../../../db/dbMethods';
import Button from '../Button';
import RadioButton from '../Button/RadioButton';

function StatusUpdate({ id, currentStatus }) {
  const [status, setStatus] = useState(currentStatus && currentStatus);
  const [loading, setLoadings] = useState(false);
  const updateStatus = async () => {
    const result = await updateDocument(id, status, setLoadings, loading);
  };
  return (
    <div className="p-4">
      <h1 className="text-left text-xl pb-6 text-gray-600 font-poppins font-semibold">
        Update Status
      </h1>
      <RadioButton
        checked={status === 'pending'}
        value="pending"
        name="Pending"
        onChange={(e) => setStatus(e.target.value)}
        names={'Pending'}
      />
      <RadioButton
        checked={status === 'confirmed'}
        value="confirmed"
        name="Confirmed"
        onChange={(e) => setStatus(e.target.value)}
        names={'Confirmed'}
      />
      <RadioButton
        checked={status === 'progress'}
        value="progress"
        name="progress"
        onChange={(e) => setStatus(e.target.value)}
        names={'In Progress'}
      />
      <RadioButton
        checked={status === 'done'}
        value="done"
        name="done"
        onChange={(e) => setStatus(e.target.value)}
        names={'Done'}
      />

      <div className="w-full mt-4">
        <Button
          text={loading ? 'Updating...' : 'Update Status'}
          onClick={updateStatus}
        />
      </div>
    </div>
  );
}

export default StatusUpdate;
