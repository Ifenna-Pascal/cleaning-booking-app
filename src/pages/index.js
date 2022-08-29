import Head from 'next/head'
import Hero from '../layout/hero/Hero'
import BlockQuote from '../section/home/BlockQuote'
import ClientReview from '../section/home/ClientReview'
import OurServices from '../section/home/OurServices'
import Process from '../section/home/Process'
import Remark from '../section/home/Remark'
import WhyChooseUs from '../section/home/WhyChooseUs'

export default function Home() {
  return ( 
    <div>
      <Head>
        <title>Crystal Home Deterget</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Hero bg="bg-homeHero">
     <div className='flex items-center lg:items-start pt-[100px] lg:pt-0 mt-[3em] w-full lg:max-w-[700px] justify-center h-full flex-col'>
          <h1 className='text-white leading-[1.5em] lg:leading-[1.2em] font-poppins tracking-wide text-center lg:text-left font-bold text-[2.3em] lg:text-[2.8em]'> Residential & Commercial <br /> Cleaning Service that <br /> you can trust.</h1>
          <p className=" px-3 md:px-0 text-base text-center lg:text-left text-[#ebe7e7] leading-6 mt-4 font-poppins">We are committed to the best quality in industrial cleaning, <br /> residential cleaning, and garden cleaning.</p>
          <div className="mt-4">
            <button className="bg-primary justify-self-end self-end border-none flex items-center py-3 px-12 font-outfit cursor-pointer text-white font-semibold rounded-md justify-center">Our Services</button>
          </div>
        </div>
      </Hero>
     <WhyChooseUs />  
     <ClientReview />
     <OurServices />
     <BlockQuote />
     <Process />
     <Remark />
    </div>
  )
}
