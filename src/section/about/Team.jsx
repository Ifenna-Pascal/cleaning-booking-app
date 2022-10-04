// import Images from '../../util/images'
import workers from '../../util/wokers'

const TeamCard = ({ img, name, position }) => {
  return (
    <div className='w-full scale_up overflow-hidden bg-[white] duration-300 rounded-[5px] h-[400px]'>
      <div className='w-full overflow-hidden duration-300 h-[300px]'>
        <img src={img} className="w-full h-full duration-300 object-center object-cover rounded-[5px]" alt="Worker Image" />
      </div>
      <div className='h-[100px] py-4 flex flex-col justify-center items-center'>
          <h2 className='text-xl text-balck font-semibold text'>{name}</h2>
          <span className="text-gray-500 text-lg ">{position}</span>
        </div>
    </div>
  )
}

function Team() {
  
  return (
    <div className="bg-[#e2e7f6]">
      <div className='max-w-[1200px] min-h-[600px] px-4 lg:px-0 flex flex-col w-full h-full items-start py-16 lg:py-20  relative mx-auto'>
        <div className='flex items-center flex-col w-full text-center'>
          <h1 className='font-semibold font-outfit leading-[1.5em] text-center md:text-left text-[1.8em] lg:text-[2.5em] text-text_primary'>Our Expert Team</h1>
          <p className="text-center max-w-[650px] py-4 text-lg text-gray-500 font-[500]">We take pride in the excellent quality of our office cleaning services, and we understand our customers&apos; needs.</p>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-8 py-8 w-full">
          {
            workers.map(x => (
              <TeamCard key={x.id} img={x.img} name={x.name} position={x.position} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Team