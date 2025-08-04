import { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import AvailableAppointment from "../../components/main/appointment/AvailableAppointment";
import BookingModal from "../../components/main/appointment/BookingModal";
import { useSelector } from "react-redux";
import { getAllAppointmentsData } from "../../feature/appointment/appointmentSlice";

function Appointment() {
  const [treatment, setTreatment] = useState(null);
  const [selected, setSelected] = useState(new Date());

  const { appointments, loading } = useSelector(getAllAppointmentsData);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="relative overflow-hidden">
        <div className="hero  bannerImage py-10 sm:py-16 md:py-[90px]  mx-auto">
          <div className="hero-content flex-col md:flex-row-reverse gap-1 justify-center overflow-hidden">
            <figure className="px-2 md:w-1/2">
              <img
                src={chair}
                className="  rounded-lg shadow-2xl sm:min-h-[330px]"
                alt="Chair"
              />
            </figure>

            <div className="md:w-1/2 day-picke-box pt-12 md:pt-0 ">
              <div className="shadow-md w-fit p-2 border rounded-lg bg-[#ffffff6d] ">
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  className="sm:w-[340px] md:w-[300px] lg:w-[360px] text-center overflow-scroll"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AvailableAppointment
        selected={selected}
        setTreatment={setTreatment}
        appointmentData={appointments}
        isLoading={loading}
      />

      <BookingModal
        treatment={treatment}
        // refetch={refetch}
        setTreatment={setTreatment}
        selected={selected}
      />
    </div>
  );
}

export default Appointment;
