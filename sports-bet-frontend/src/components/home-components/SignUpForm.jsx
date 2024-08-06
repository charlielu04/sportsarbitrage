import React from "react";
import axios from "axios";
import "./SignUpForm";

function SignUpForm() {
  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    console.log("hl");
    axios
      .post("http://localhost:3001/api/phonenumber", {
        name: name,
        phoneNumber: phoneNumber,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="phone-div">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            placeholder="John Doe"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone number:
          <input
            type="text"
            value={phoneNumber}
            placeholder="+x(xxx)xxx-xxxx"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUpForm;
