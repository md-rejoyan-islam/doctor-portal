import { useDispatch, useSelector } from "react-redux";
import { getAllUsersData } from "../../feature/users/userSlice";
import { useEffect } from "react";
import { getAuthData } from "../../feature/auth/authSlice";
import { changeRole, getAllUser } from "../../feature/users/userApiSlice";

const AllUsers = () => {
  const { users } = useSelector(getAllUsersData);
  const { user } = useSelector(getAuthData);
  const dispatch = useDispatch();

  const handleChangeRole = (data) => {
    dispatch(changeRole(data));
  };

  useEffect(() => {
    if (user?.role === "admin") {
      dispatch(getAllUser());
    }
  }, [dispatch, user?.role]);

  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-3xl text-center mb-4">All Users</h2>
      <div className="overflow-x-auto pb-4">
        <table className="table w-full">
          <thead className="bg-[#d4f6fc88] rounded-md">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Role Change</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={user._id} className="hover:bg-slate-100">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.role}</td>
                <td>
                  <select
                    name=""
                    id=""
                    className="py-1 px-2 ro text-sm   bg-sky-100 border-sky-200 rounded-sm border"
                    defaultValue={user.role}
                    onChange={(e) =>
                      handleChangeRole({
                        id: user._id,
                        role: e.target.value,
                      })
                    }
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
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
