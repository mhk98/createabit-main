import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { storgeUserInfo } from "../services/auth.service";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log("formData", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://createabit-backend.onrender.com/api/v1/user/login",
        // "http://localhost:5000/api/v1/user/login",
        formData
      );

      if (response.data.accessToken) {
        location.replace("/");
      }

      storgeUserInfo({ accessToken: response.data.accessToken });
    } catch (error) {
      console.error("Error:", error);
      // Handle the error, e.g., show an error message to the user.
    }
  };

  return (
    <div className="login-container">
      <h3 className="">Login</h3>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label className="text-left " htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            name="Email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-left " htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="Password"
            id="password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="mt-3 butn butn-md butn-bord radius-10">
          Login
        </button>
      </form>
      <p className="mt-2">
        <span>Don't have account?</span>
        <span>
          <Link href="/dark/register" className="text-primary" target="_blank">
            {" "}
            Sign Up
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
