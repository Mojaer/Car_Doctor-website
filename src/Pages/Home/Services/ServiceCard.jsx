import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { img, price, title, _id } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-center ">
                <h2 className="card-title lg:text-left">{title}</h2>
                <p className="text-lg text-red-500 font-bold lg:text-left">{price}</p>
                <div className="card-actions lg:text-left">

                    <Link to={`/booking/${_id}`} >
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;