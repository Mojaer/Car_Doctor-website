import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [Services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-doctior-server.vercel.app/services')
            .then((res) => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mb-8">
            <div className="space-y-6">
                <h1 className="text-xl font-bold text-orange-500 text-center ">Service</h1>
                <h1 className="text-5xl font-bold text-center"> Our Service Area</h1>
                <p className="w-2/3 mx-auto text-center">the majority have suffered alteration in some form, by injected humour, or randomizes words which do not look even slightly believable.  </p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
                {
                    Services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}>
                        </ServiceCard>)
                }

            </div>
        </div>

    );
};

export default Services;