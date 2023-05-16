// import { useLoaderData } from "react-router-dom";

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Booking = () => {
    const { user } = useContext(AuthContext)
    const { _id, title, img } = useLoaderData()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const discount = form.discount.value;

        const order = {
            CustomerName: name, email, img, service: title,
            date, price: discount, serviceId: _id

        }

        fetch('https://car-doctior-server.vercel.app/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    // const service = useLoaderData()
    // const { title, img } = service
    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <div className="card-body grid lg:grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.name} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">date</span>
                        </label>
                        <input type="date" name="date" defaultValue={new Date().getDate()} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discount</span>
                        </label>
                        <input type="number" name="discount" defaultValue={`$123`} placeholder="$" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mb-6">
                    <input type="submit" value="submit" className="btn btn-primary" />
                </div>
            </div>

        </form>

    );
};

export default Booking;