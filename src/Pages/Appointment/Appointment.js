import { useQuery } from '@tanstack/react-query';
import format from 'date-fns/format';
import React, { useEffect, useState } from 'react';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import BookingModal from './AvailableAppointment/BookingModal/BookingModal';
import Banner from './Banner/Banner';

const Appointment = () => {
    const [treatment, setTreatment] = useState(null);
    const [selected, setSelected] = useState(new Date());

const date = format(selected, "PP");
const { data: appointmentData = [], refetch } = useQuery({
  queryKey: ["appointmentCollection", date],
  // queryFn: async () => {
  //   const res = await fetch("http://localhost:5005/appointmentCollection`");
  //   const data = await res.json();
  //   return data;
  // },
  queryFn: () =>
    fetch(`http://localhost:5005/appointmentCollection?date=${date}`).then(
      (res) => res.json()
    ),
});


    return (
      <div>
        <Banner selected={selected} setSelected={setSelected}></Banner>
        <AvailableAppointment
          selected={selected}
          setTreatment={setTreatment}
          appointmentData={appointmentData}
        ></AvailableAppointment>
        <BookingModal
          treatment={treatment}
          refetch={refetch}
          setTreatment={setTreatment}
          selected={selected}
        ></BookingModal>
      </div>
    );
};

export default Appointment;