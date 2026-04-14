import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Banner } from "../../components/Banner/Banner";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://car-doctor-server-production-153a.up.railway.app/booking?email=${user?.email}`;

  // ================= GET BOOKINGS =================
  useEffect(() => {
    if (!user?.email) return; // 🔥 FIX 1 (important)

    axios
      .get(url, { withCredentials: true }) // 🔥 FIX 2
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.log("GET ERROR:", err);
      });
  }, [user?.email]);

  // ================= CONFIRM =================
  const handleBookingConfirme = (id) => {
    fetch(`https://car-doctor-server-production-153a.up.railway.app/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include", // 🔥 FIX 3 (VERY IMPORTANT)
      body: JSON.stringify({ status: "completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Confirm successful",
            icon: "success",
          });

          // UI update safe way
          const updatedBookings = bookings.map((b) =>
            b._id === id ? { ...b, status: "completed" } : b
          );

          setBookings(updatedBookings);
        }
      })
      .catch((err) => console.log(err));
  };

  // ================= DELETE =================
  const handleDelete = (id) => {
    const proceed = confirm(`Are You sure? you want to delete.`);

    if (proceed) {
      fetch(`https://car-doctor-server-production-153a.up.railway.app/booking/${id}`, {
        method: "DELETE",
        credentials: "include", // 🔥 FIX 4 (VERY IMPORTANT)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted successful",
              icon: "success",
            });

            const remaining = bookings.filter((b) => b._id !== id);
            setBookings(remaining);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Banner title={"Product Details"} />

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-50 text-gray-700 uppercase text-sm font-semibold">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" className="checkbox checkbox-sm" />
              </th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Service & Price</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Update</th>
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