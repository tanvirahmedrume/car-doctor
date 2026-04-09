import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Banner } from "../../components/Banner/Banner";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);


  const handleBookingConfirme = (id) =>{
      fetch(`http://localhost:5000/booking/${id}`,{
        method: 'PATCH',
        headers: {
          'content-type': 'application/json' 
        },
        body: JSON.stringify({status: 'completed'})
      })
      .then(res => res.json())
      .then (data => {
        if (data.modifiedCount > 0) {

              Swal.fire({
              title: "Confirme successfull",
              icon: "success",
              draggable: true,
            });
          // Update Status
          const remaining = bookings.filter(bookings => bookings._id !== id);
          const updated = bookings.find(booking => booking._id === id);
          updated.status = 'completed'
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      })
  }


  // Delete function
  const handleDelete = (id) => {
    const proceed = confirm(`Are You sure? you want to be delete.`);

    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted successfull",
              icon: "success",
              draggable: true,
            });


            const remaining = bookings.filter(bookings => bookings._id !== id)
            setBookings(remaining);

          }
        });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Banner title={"Product Details"}></Banner>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-50 text-gray-700 uppercase text-sm font-semibold">
            <tr>
              <th className="px-4 py-3">
                <label>
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </label>
              </th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Service & Price</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Update</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirme={handleBookingConfirme}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
