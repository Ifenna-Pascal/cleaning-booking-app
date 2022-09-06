import { services } from '../../util/services';

function ServiceDropDown() {
    return (
        <>
            {services.map((item) => (
                <a
                    key={item.id}
                    href={item.link}
                    className="flex items-center py-4 px-2 -m-3 transition duration-150 ease-in-out rounded-lg  text-white font-[600]  text-base hover:bg-primary "
                >
                    {item.name}
                </a>
            ))}
        </>
    )
}

export default ServiceDropDown