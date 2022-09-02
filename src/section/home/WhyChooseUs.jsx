import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AboutCard from '../../components/AboutCard'
import Contact from '../../components/Contact'
import Button from '../../components/shared/Button'
import RadioButton from '../../components/shared/Button/RadioButton'
import { services } from '../../util/services'

function WhyChooseUs() {
  console.log(services, 'services');
  const [selected, setSelected] = useState(null);
  const handleChange = (e) => setSelected(e.target.value);
  const router = useRouter()
  const navigateRoute = () => {
    router.push({
      pathname: "/bookings",
      query: { index: 1 }
    });
  }

  return (
    <div className="bg-[#e2e7f6]">
      <div className='max-w-[1250px] py-8 pb-12 flex justify-center w-full h-full flex-col md:flex-row relative mx-auto'>
        <div className='basis[60%] px-4 md:pl-8 md:pr-0 py-6 w-full'>
          <h1 className='font-semibold font-poppins leading-[1.2em] text-center md:text-left text-[1.8em] lg:text-[2.2em] text-text_primary'>Why Choose Us?</h1>
          <p className='text-text_secondary font-poppins leading-[1.7rem] md:leading-[1.8rem]  text-center md:text-left  max-w-[680px] text-[1.1rem] md:text-[1rem] md:w-[80%] mb-4 py-2'>We are committed to provide a safe, healthy and clean environments for our clients and the community at large,through state-of-the-art cleaning technologies, experienced and professionally trained staffs and a commitment to customer service.</p>
          <Link href="/about" className='py-12'><span className="underline uppercase font-semibold font-outfit flex items-center justify-center md:justify-start text-primary hover:text-secondary ">Learn more about us &gt;&gt;</span></Link>
          <div className='grid lg:grid-cols-2 py-8  pb-16 gap-6 max-w-[700px]'>
            <AboutCard img="ri-vip-crown-fill" header="Certified Company" content="Crystal home deterge limited is legally registered with the corporate affairs commission of Nigeria,with certifications also from recognized cleaning company,YAZacademy in Nigeria." />
            <AboutCard img="ri-price-tag-2-fill" header="Reasonable Price" content="Be rest assured to not break the bank for our service!. We offer affordable prices for any and all services with additional incentives. Anything to keep our clients happy!" />
            <AboutCard img="ri-user-settings-fill" header="Experienced Staff" content="All new staffs are trained with verbal, written technical manuals and video instruction on personnel policies including our health/ safety program prior placement in a new account. At the time of being placed a trainer
works hand in hand with the new associate until they understand what is expected.All associates are trained on the health/safety program once per month. We cover a different topic at our monthly Toolbox Meetings." />

            <AboutCard img="ri-tools-fill" header="Best Equipment" content="All equipments in use are environmental friendly and  are treated and serviced at intervals to ensure efficiency." />
          </div>
        </div>
        <div className='-mt-[60px] lg:-mt-[250px] rounded-xl mx-[1rem] lg:min-w-[420px] min-h-[800px] h-full flex flex-col pt-8 md:pt-8 px-4 items-start shadow-lg border-lg bg-white'>
          <h2 className="text-text_primary font-poppins font-semibold text-center flex items-center select relative pb-4  justify-center w-full text-[1.4em]">Select A Service! </h2>
          <div className="pt-4 w-full">
            {
              services.slice(1).map(service => (
                <div key={service.id} className="w-full">
                  <RadioButton
                    checked={selected === service.type}
                    value={service.type}
                    onChange={handleChange}
                    names={service.name}
                  />
                </div>
              ))
            }
          </div>
          <Button text="Book Now" onClick={navigateRoute} />
          <div className="flex flex-col md:flex-row py-8 md:items-center w-full justify-between ">
            <Contact icon="ri-phone-line" header="Hotline" content="+11234567890" /><br />
            <Contact icon="ri-mail-unread-line" header="Email" content="info@example.com" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs