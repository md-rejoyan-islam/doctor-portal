import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFeedbackById,
  getAllFeedback,
} from "../../feature/feedback/feedbackApiSlice";
import { getAllFeedbackData } from "../../feature/feedback/feedbackSlice";
import { formatDate } from "date-fns";
import ConfirmationModal from "./ConfirmationModel";

function AllFeedbacks() {
  const [deletingFeedback, setDeletingFeedback] = useState(null);

  const dispatch = useDispatch();
  const { feedbacks } = useSelector(getAllFeedbackData);

  const closeModal = () => {
    setDeletingFeedback(null);
  };

  const handleDelete = (feedback) => {
    dispatch(deleteFeedbackById(feedback._id));
  };

  useEffect(() => {
    dispatch(getAllFeedback());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h3 className="text-3xl mb-5">All Feedbacks</h3>
      <div className="overflow-x-auto pb-10">
        <table className="table w-full ">
          <thead>
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
                  <label
                    onClick={() => setDeletingFeedback(feedback)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </label>
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
