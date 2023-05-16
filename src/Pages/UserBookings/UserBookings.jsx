import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import BookingTable from "./BookingTable";
import { useNavigate } from "react-router-dom";



const UserBookings = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [userbookings, setUserBookings] = useState([])

    useEffect(() => {
        fetch(`https://car-doctior-server.vercel.app/booking?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doctor-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.error) {
                    return navigate('/')
                }
                setUserBookings(data)
            })
    }, [])

    const handleDelete = (id) => {
        const proceed = confirm('are you sure you want to delete')
        if (proceed) {
            fetch(`https://car-doctior-server.vercel.app/booking/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = userbookings.filter(userbooking => userbooking._id !== id)
                        setUserBookings(remaining)
                        alert('successfully deleted')
                    }
                })
        }
    }
    const handleConfirm = (id) => {
        const proceed = confirm('are you sure you want to confirm')
        if (proceed) {
            fetch(`https://car-doctior-server.vercel.app/booking/${id}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        const remaining = userbookings.filter(userbooking => userbooking._id !== id)
                        let addedStatus = userbookings.find(userbooking => userbooking._id === id)
                        addedStatus.status = 'confirm';
                        setUserBookings([addedStatus, ...remaining])
                        alert('successfully modified')

                    }
                })
        }
    }


    return (
        <div className="overflow-x-auto lg:w-full">
            <table className="table lg:w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>image</th>
                        <th>service</th>
                        <th>date</th>
                        <th> Price</th>
                    </tr>
                </thead>
                <tbody>
                    {userbookings.map((booking) => <BookingTable key={booking._id} handleDelete={handleDelete} handleConfirm={handleConfirm} booking={booking}></BookingTable>)}
                </tbody>
            </table>
        </div>
    );
};

export default UserBookings;