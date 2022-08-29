import ServiceCard from "../../components/ServiceCard";
import Hero from "../../layout/hero/Hero";
import ClientReview from "../../section/home/ClientReview";
import Processes from "../../section/home/Process";
import Remark from "../../section/home/Remark";
import Images from "../../util/images";

const Services = () => {
    return (
        <div>
            <Hero bg="bg-residential">
                <div className='flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col'>
                    <h1 className='text-white leading-[1.5em] lg:leading-[1em] font-poppins tracking-wide text-center  font-bold text-[2.3em]  lg:text-[2.5em]'>Services</h1>
                    <p className=" px-3 max-w-[700px] tracking-wider md:px-0 text-base text-center  text-[#ebe7e7] leading-8 mt-3 font-poppins">Duis mollis est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem necid nibh ultricies vehicula.</p>
                </div>
        </Hero>
        <div className='my-4 grid max-w-[1300px] mx-auto  lg:grid-cols-4 py-4 md:py-12 y6gap-8 md:gap-4 md:grid-cols-2 grid-cols-1'>
            <ServiceCard type="residential" image={Images.imageSeven} icon="ri-home-4-fill" header="Residential Cleaning" content="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor." />
            <ServiceCard type="commercial" image={Images.imageEleven} icon="ri-building-4-fill" header="Commercial Cleaning" content="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor." />
            <ServiceCard type="construction" image={Images.imageTen} icon="ri-home-4-fill" header="Construction Cleaning" content="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor." />
            <ServiceCard type="landscape" image={Images.imageSeven} icon="ri-home-4-fill" header="Landscape Cleaning" content="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor." />
        </div>
        <Processes />
        <ClientReview />
        <Remark />
        </div>
    )
}

export default Services;