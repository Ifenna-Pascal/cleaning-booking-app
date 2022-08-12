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
     <Hero />
     <WhyChooseUs />
     <ClientReview />
     <OurServices />
     <BlockQuote />
     <Process />
     <Remark />
    </div>
  )
}
