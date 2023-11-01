import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to your server.
  };

  return (
    <div className="register-container">
      <h2 className="text-black">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label className="text-black text-left" htmlFor="username">
            Username
          </label>
          <input
            className="form-input"
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-black text-left" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-black text-left" htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
