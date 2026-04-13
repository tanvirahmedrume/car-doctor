import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Banner } from "../../components/Banner/Banner";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axiosSecure from "../../api/axiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // ✅ GET BOOKINGS
  useEffect(() => {
    if (!user?.email) return; // 🔥 important (user না আসা পর্যন্ত call না)

    axiosSecure
      .get(`/booking?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, [user?.email]);

  // ✅ UPDATE STATUS
  const handleBookingConfirme = (id) => {
    axiosSecure
      .patch(`/booking/${id}`, { status: "completed" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Confirm successful",
            icon: "success",
          });

          // UI update safely
          const updatedBookings = bookings.map((b) =>
            b._id === id ? { ...b, status: "completed" } : b
          );

          setBookings(updatedBookings);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ✅ DELETE
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");

    if (proceed) {
      axiosSecure
        .delete(`/booking/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted successfully",
              icon: "success",
            });

            const remaining = bookings.filter((b) => b._id !== id);
            setBookings(remaining);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Banner title={"Bookings"} />

      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirme={handleBookingConfirme}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;