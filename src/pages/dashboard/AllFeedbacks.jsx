import { formatDate } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData } from "../../feature/auth/authSlice";
import {
  deleteFeedbackById,
  getAllFeedback,
} from "../../feature/feedback/feedbackApiSlice";
import { getAllFeedbackData } from "../../feature/feedback/feedbackSlice";
import ConfirmationModal from "./ConfirmationModel";

function AllFeedbacks() {
  const [deletingFeedback, setDeletingFeedback] = useState(null);

  const { user } = useSelector(getAuthData);

  const dispatch = useDispatch();
  const { feedbacks } = useSelector(getAllFeedbackData);

  const closeModal = () => {
    setDeletingFeedback(null);
  };

  const handleDelete = (feedback) => {
    dispatch(deleteFeedbackById(feedback._id));
  };

  useEffect(() => {
    dispatch(getAllFeedback({ email: user.email }));
  }, [dispatch]);

  return (
    <div className="bg-white p-4 rounded-md">
      <h3 className="text-3xl mb-4 text-center ">All Feedbacks</h3>
      <div className="overflow-x-auto pb-6 ">
        <table className="table w-full ">
          <thead className="bg-[#d4f6fc88] rounded-md">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Time</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks?.map((feedback, i) => (
              <tr key={feedback._id} className="hover:bg-slate-100">
                <th>{i + 1}</th>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.phone}</td>
                <td>{formatDate(feedback.createdAt, "PP")}</td>
                <td>{feedback.message}</td>
                <td>
                  <button
                    onClick={() => setDeletingFeedback(feedback)}
                    // htmlFor="confirmation-modal"
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingFeedback && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingFeedback.name}. It cannot be undone.`}
          successAction={handleDelete}
          successButtonName="Delete"
          modalData={deletingFeedback}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default AllFeedbacks;
