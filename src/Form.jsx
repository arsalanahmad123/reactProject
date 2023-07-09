import { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Signed up successfully!");
    } else {
      console.log("Passwords do not match!");
      return;
    }

    if (formData.acceptTerms) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1 className="form-signup">Sign up</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="checkboxDiv">
          <input
            type="checkbox"
            name="acceptTerms"
            id="checkbox"
            checked={formData.acceptTerms}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">I accept the terms and conditions</label>
        </div>
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
