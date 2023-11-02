import axios from "axios";
import { useState } from "react";

const Login = () => {
  //   const { setUser, setCookie } = useUser();
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
        formData
      );

      console.log("RegisterData", response.data);
      // Handle the response data as needed, e.g., redirect to a new page or show a success message.
    } catch (error) {
      console.error("Error:", error);
      // Handle the error, e.g., show an error message to the user.
    }
  };

  return (
    <div className="login-container">
      <h3 className="  ">Login</h3>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label className="   text-left" htmlFor="email">
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
          <label className="   text-left" htmlFor="password">
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
        <button type="submit" className="butn butn-md butn-bord radius-10">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
