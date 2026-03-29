import Link from 'next/link';
import Image from 'next/image';
import {services} from '../data/services';

const Services = () => {
    return (
        <div className=''>

            <h1 className='font-bold text-xl md:text-3xl text-amber-950 p-4 md:p-16'>
                Our Services
            </h1>

            {/* Display services */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-4 md:p-16 gap-10'>
            {services.map((service) => (
                <div key={service.id} className="relative flex flex-col gap-5rounded-lg shadow-md">
                    <Image src={service.imageUrl} alt={service.title} width={600} height={600} className="w-full h-48 object-cover rounded-md mb-4" />
                    <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-bold ">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    </div>
                </div>
            ))}
            </div>

        </div>
    );
}

export default Services;