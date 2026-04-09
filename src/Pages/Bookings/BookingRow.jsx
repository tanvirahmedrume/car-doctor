const BookingRow = ({ booking, handleDelete,handleBookingConfirme }) => {
  const {
    _id,
    img,
    serviceTitle,
    price,
    customerInfo: { firstName, lastName, phone, email },
    bookingDate,
    status,
  } = booking;



  // Status color
  const statusColor =
    status === "pending"
      ? "badge badge-warning"
      : status === "completed"
        ? "badge badge-success"
        : "badge badge-error";

  return (
    <tr className="transition-all duration-300 hover:bg-gray-50 even:bg-gray-50">
      {/* Checkbox */}
      <th className="p-6">
        <button
          onClick={() => handleDelete(_id)}
          className=" btn btn-circle
    inline-block 
    border border-gray-200 
    bg-gray-200 
    text-gray-700 
    font-medium
    cursor-pointer 
    hover:bg-gray-600 
    hover:text-white
    hover:scale-105 
    transition 
    transform 
    duration-200
    ease-in-out
  "
        >
          X
        </button>
      </th>

      {/* Customer Info with Avatar */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-24 w-24">
              <img
                src={img}
                alt={booking.customerInfo.firstName}
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800">
              {booking.customerInfo.firstName} {booking.customerInfo.lastName}
            </div>
            <div className="text-gray-500 text-sm">
              {booking.customerInfo.email}
            </div>
            <div className="text-gray-500 text-sm">
              {booking.customerInfo.phone}
            </div>
          </div>
        </div>
      </td>

      {/* Service & Price */}
      <td className="px-6 py-4">
        <div className="font-medium text-gray-700">{booking.serviceTitle}</div>
        <span className="badge badge-outline badge-sm mt-1">
          ${booking.price}
        </span>
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <span
          className={
            booking.status === "pending"
              ? "badge badge-warning"
              : booking.status === "completed"
                ? "badge badge-success"
                : "badge badge-error"
          }
        >
          {booking.status}
        </span>
      </td>

      {/* Details Button */}
      <td className="px-6 py-4">
<button
  onClick={() => handleBookingConfirme(_id)}
  disabled={status === 'completed'}
  className={`btn btn-outline btn-xs transition-all 
    ${status === 'completed' 
      ? 'opacity-50 cursor-not-allowed bg-gray-400 text-white' 
      : 'hover:btn-primary'
    }`}
>
  {status === 'completed' ? 'Confirmed' : 'Confirm'}
</button>
      </td>
    </tr>
  );
};

export default BookingRow;
