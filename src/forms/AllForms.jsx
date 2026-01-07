import { Link } from "react-router-dom";

export const AllForms = () => {
  return (
    <>
      <div className="border rounded h-30 w-30 text-center flex flex-col justify-evenly border-gray-400 bg-gray-400 text-black font-bold">
        <p>User Entry</p>
        <div className="rounded flex justify-evenly">
          <Link to={"/signup"}>
            SignUp
          </Link>
          <p>/</p>
          <Link to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};