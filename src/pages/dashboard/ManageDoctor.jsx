import { useState } from "react";
import ConfirmationModal from "./ConfirmationModel";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctorsData } from "../../feature/doctor/doctorSlice";
import { deleteDoctor } from "../../feature/doctor/doctorApiSlice";
// import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const { doctors, loading } = useSelector(getAllDoctorsData);

  const dispatch = useDispatch();

  const handleDeleteDoctor = (doctor) => {
    dispatch(deleteDoctor(doctor._id));
  };

  if (loading) {
    return "<Loading></Loading>";
  }

  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-3xl text-center pb-4">All Doctors</h2>
      <div className="overflow-x-auto pb-6">
        <table className="table w-full">
          <thead className="bg-[#d4f6fc88] rounded-md">
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id} className="hover:bg-slate-100">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.photo} alt={doctor.name} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td className="space-x-2">
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm bg-red-400 py-1 hover:bg-red-500 border-none text-[12px] rounded-md text-white"
                  >
                    Delete
                  </label>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm bg-sky-400 py-1 hover:bg-sky-600 border-none text-[12px] rounded-md text-white"
                  >
                    Edit
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
          successAction={handleDeleteDoctor}
          successButtonName="Delete"
          modalData={deletingDoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
