import React, { useContext, useEffect, useState, } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [booking, setBooking] = useState([])

    const url = `http://localhost:5000/booking?email=${user?.email}`;


    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, [user?.email])


  return (
    <div className='min-h-screen flex items-center justify-center'>
        <h2 className="text-5xl">Booking: {booking.length}</h2>
    </div>
  )
}

export default Bookings