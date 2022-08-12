import React from 'react'
import Process from '../../components/Process'

function Processes() {
  return (
    <div className={`min-h-[70vh]  w-full bg-processTwo  bg-no-repeat bg-cover flex  bg-center bg-fixed relative`}>
       <div className='max-w-[1250px] w-full py-16  flex flex-col items-center justify-center relative mx-auto'>
          <h1 className="text-center pb-12 text-white font-poppins text-[2.5em] leading-[4rem] font-semibold capitalize">Simple 3 Steps Processs</h1>
          <div className="flex justify-between items-center">
              <Process header="Book your package" content="Cras mattis consectetur purus sit amet ipsum dolor sit amet consectetur adipiscing elit." icon="ri-book-mark-line" />
              <div className='flex items-center justify-center'><div className="w-32  flex relative items-center justify-center border border-dashed border-process_logo px-6"></div></div>
              <Process header="Set the scchedule" content="Cras mattis consectetur purus sit amet amet ipsum dolor sit amet consectetur adipiscing elit." icon="ri-timer-line" />
              <div><div className="w-32  flex relative items-center justify-center border border-dashed border-process_logo px-6"></div></div>
              <Process header="Cleaning Done!" content="amet ipsum dolor sit amet consectetur adipiscing elit.amet ipsum dolor sit amet consectetur." icon="ri-check-double-line"   />
          </div>
       </div>
    </div>
  )
}

export default Processes