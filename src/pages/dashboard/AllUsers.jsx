import { useDispatch, useSelector } from "react-redux";
import { getAllUsersData } from "../../feature/users/userSlice";
import { useEffect } from "react";
import { getAuthData } from "../../feature/auth/authSlice";
import { getAllUser, makeAdmin } from "../../feature/users/userApiSlice";

const AllUsers = () => {
  const { users } = useSelector(getAllUsersData);
  const { user } = useSelector(getAuthData);
  const dispatch = useDispatch();

  const handleMakeAdmin = (id) => {
    dispatch(makeAdmin(id));
  };

  useEffect(() => {
    if (user.role === "admin") {
      dispatch(getAllUser());
    }
  }, [dispatch, user.role]);

  return (
    <div>
      <h2 className="text-3xl">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
