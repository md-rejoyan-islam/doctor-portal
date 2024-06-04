import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../../feature/auth/authApiSlice";

function LoginWithGoogle() {
  const dispatch = useDispatch();
  // Function to handle Google login
  const handleLoginWithGoogle = async () => {
    dispatch(signInWithGoogle());
  };

  return (
    <button
      className="btn w-full  input-rounded border bg-white hover:bg-zinc-200 hover:text-zinc-800 text-zinc-500"
      onClick={handleLoginWithGoogle}
    >
      CONTINUE WITH GOOGLE
    </button>
  );
}

export default LoginWithGoogle;
