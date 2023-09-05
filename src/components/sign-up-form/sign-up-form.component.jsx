import { useState } from "react";

const SignUpForm = () => {
  const defaultFormFields = {
    displayname: "",
    email: "",
    password: "",
    confirmPasword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayname, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign Up with Email and Password</h1>
      <form onSubmit={() => {}}>
        <label>Display name</label>
        <input
          type="text"
          name="displayname"
          value={displayname}
          required
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <label>Confirm Passsword</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
