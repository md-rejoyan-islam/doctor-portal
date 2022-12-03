import React, { useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointment = ({ appointmentData, selected, setTreatment }) => {
  // const date = format(selected, "PP");
  //   const { data: appointmentData = [],refetch } = useQuery({
  //     queryKey: ["appointmentCollection",date],
  //     // queryFn: async () => {
  //     //   const res = await fetch("http://localhost:5005/appointmentCollection`");
  //     //   const data = await res.json();
  //     //   return data;
  //     // },
  //     queryFn: () =>
  //       fetch(`http://localhost:5005/appointmentCollection?date=${date}`).then((res) =>
  //         res.json()
  //       ),
  //   });

  return (
    <section className="my-5 ">
      <h1 className="text-center text-2xl text-primary font-bold py-12">
        Available Appointments on {format(selected, "PP")}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {appointmentData &&
          appointmentData.map((service) => (
            <div className="card bg-base-100 shadow-lg " key={service._id}>
              <div className="card-body text-center">
                <h2 className="text-xl text-primary font-bold">
                  {service.name}
                </h2>
                <p>
                  {service.slot.length > 0
                    ? service.slot[0]
                    : "try another day"}
                </p>
                <p>{service.slot.length} spaces available</p>
                <div className="card-actions justify-center py-1">
                  {appointmentData && (
                    <label
                      disabled={service.slot.length === 0}
                      className="btn text-white bg-gradient-to-r from-primary to-secondary border-0 font-bold"
                      htmlFor="booking-modal"
                      onClick={() => setTreatment(service)}
                    >
                      BOOK APPOINTMENT
                    </label>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
