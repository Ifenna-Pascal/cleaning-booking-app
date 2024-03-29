import Hero from '../layout/hero/Hero';
import BookingSection from '../section/booking';
import BookQuote from '../section/booking/BookQuote';
import BlockQuote from '../section/home/BlockQuote';
import Remark from '../section/home/Remark';

function Booking() {
  return (
    <div>
      <Hero bg="bg-bookingHero">
        <div className="flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col">
          <h1 className="text-white leading-[1.5em] lg:leading-[1.5em] font-poppins tracking-wide text-center lg:text-left font-bold text-[2.3em] lg:text-[3em]">
            Book Now
          </h1>
          <p className=" px-3 max-w-[700px] tracking-wider md:px-0 text-lg text-center  text-[#ebe7e7] leading-8 mt-4 font-poppins">
            For our services you can book us. Fil the form, schedule a date,
            make payemnts we would deliver{' '}
          </p>{' '}
        </div>
      </Hero>
      <BookingSection />
      <BookQuote />
      <div className="bg-[#e2e7f6]">
        <Remark />
      </div>
      <BlockQuote />
    </div>
  );
}

export default Booking;
