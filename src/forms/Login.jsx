import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormLayout } from "../formlayout/FormLayout";

export default function Login() {
  const [entry, setEntry] = useState({
    name: "",
    password: "",
  });

  const [err, setErr] = useState();

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({
      ...entry,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("user"));

    if (!userDetails) {
      setErr("No account found. Please sign up first.");
      return;
    }

    if (
      entry.name === userDetails.name &&
      entry.password === userDetails.password
    ) {
      setErr("");
      alert("Login Successful!");
      navigate("/");
    } else {
      setErr("Invalid name or password!");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FormLayout>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
        <div className=" flex items-center justify-center p-4">
          <div className="bg-gray-400 shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Login
            </h2>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={entry.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={entry.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  placeholder="Enter your password"
                />
              </div>
              {err && (
                <p className="text-red-500 text-center font-medium">{err}</p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Login
              </button>
            </form>

            <p className="text-center mt-4 text-gray-600">
              Don’t have an account?
              <Link
                to="/signup"
                className="text-blue-600 font-medium hover:underline"
                onClick={scrollToTop}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}