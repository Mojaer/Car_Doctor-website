

const BookingTable = ({ booking, handleDelete, handleConfirm }) => {

    const { img, service, date, price, _id } = booking;




    return (
        <>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)}>delete</button>
                </th>
                <td>
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="image" />
                    </div>
                </td>
                <td>
                    {service}
                </td>
                <td>{date}</td>
                <td>{price}</td>
                <th>
                    {booking?.status ? <p>Confirmed</p> : <button onClick={() => handleConfirm(_id)}>Confirm</button>}
                </th>

            </tr>
        </>
    );
};

export default BookingTable;