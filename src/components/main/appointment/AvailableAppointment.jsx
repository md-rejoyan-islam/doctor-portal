import { format } from "date-fns";
import PulseLoader from "react-spinners/PulseLoader";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthData } from "../../../feature/auth/authSlice";

const AvailableAppointment = ({
  appointmentData,
  selected,
  setTreatment,
  isLoading,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector(getAuthData);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <PulseLoader color="#2563EB" />
      </div>
    );
  }

  return (
    <section className="my-8 px-4">
      <h1 className="text-center text-2xl text-primary font-bold py-12">
        Available Appointments on {format(selected, "PP")}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        {appointmentData &&
          appointmentData?.map((service, index) => (
            <div
              className="card bg-base-100 shadow-lg border border-sky-100 hover:border-sky-200 "
              key={index}
            >
              <div className="card-body text-center">
                <h2 className="text-xl text-primary font-bold">
                  {service.name}
                </h2>
                <p>
                  {service?.slots?.length > 0
                    ? service?.slots[0]
                    : "try another day"}
                </p>
                <p>{service?.slots?.length} spaces available</p>
                <p> price: $ {service?.price}</p>
                <div className="card-actions justify-center py-1">
                  {appointmentData && (
                    <label
                      disabled={service?.slots?.length === 0}
                      className="btn text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary border-0 font-bold"
                      htmlFor="booking-modal"
                      onClick={() => {
                        if (!user) {
                          navigate("/login", {
                            state: { from: location },
                          });
                        } else {
                          setTreatment(service);
                        }
                      }}
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

AvailableAppointment.propTypes = {
  appointmentData: PropTypes.array.isRequired,
  selected: PropTypes.object.isRequired,
  setTreatment: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default AvailableAppointment;
