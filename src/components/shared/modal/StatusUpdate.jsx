import  { useState } from 'react'
import Button from '../Button'
import RadioButton from '../Button/RadioButton'

function StatusUpdate() {
    const [status, setStatus] = useState('')
  return (
    <div className='p-4'>
        <h1 className='text-left text-xl pb-6 text-gray-600 font-poppins font-semibold'>Update Status</h1>
        <RadioButton
              checked={status === "pending"}
              value="pending"
              name='Pending'
              onChange={(e) => setStatus(e.target.value)}
              names={"Pending"}
        />
        <RadioButton
            checked={status === "progress"}
            value="progress"
            name='progress'
            onChange={(e) => setStatus(e.target.value)}
            names={"In Progress"}   
        />
            <RadioButton
            checked={status === "done"}
            value="done"
            name='done'
            onChange={(e) => setStatus(e.target.value)}
            names={"Done"}   
        />
        <RadioButton
            checked={status === "confrimed"}
            value="confrimed"
            name='comfirmed'
            onChange={(e) => setStatus(e.target.value)}
            names={"Comfirmed"}   
        />
        <div className="w-full mt-4">
            <Button text="Update Status" />
        </div>
    </div>
  )
}

export default StatusUpdate