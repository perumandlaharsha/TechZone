import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { regexConditions } from "./regexConditions";
import { FormLayout } from "../formlayout/FormLayout";

export const SignUp = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const regexValidate = () => {
    if (!regexConditions.namePattern.test(formData.name)) {
      setErrMessage("Invalid UserName");
      return false;
    }
    if (!regexConditions.emailPattern.test(formData.email)) {
      setErrMessage("Invalid Email");
      return false;
    }

    if (!regexConditions.PassPattern.test(formData.password)) {
      setErrMessage("Weak Password");
      return false;
    }

    setErrMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regexValidate()) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("SIgnUp successful");
      navigate("/");
    }
  };

  return (
    <FormLayout>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
        <div className=" flex items-center justify-center">
          <div className="bg-gray-400 shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Create Account
            </h2>
            {errMessage && (
              <p className="text-red-600 text-center mb-3 font-medium">
                {errMessage}
              </p>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  placeholder="Confirm your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center mt-4 text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};