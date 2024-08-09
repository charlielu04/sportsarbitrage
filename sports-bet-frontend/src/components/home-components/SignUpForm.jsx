import React from "react";
import axios from "axios";
import "./SignUpForm.css";

function SignUpForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errorMsgVisable, setErrorMsgVisable] = React.useState(false);
  const [successMsgVisable, setSuccessMsgVisable] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = new RegExp("^[^s@]+@[^s@]+.[^s@]+$");
    if (!regex.test(email)) {
      setErrorMsgVisable(true);
    } else {
      setErrorMsgVisable(false);
      setSuccessMsgVisable(true);
      axios
        .post("https://sportsarbitrage.onrender.com/api/email", {
          name: name,
          email: email,
        })
        .then((e) => console.log(e));
    }
  };

  return (
    <div>
      <div className="email-div">
        <h1 className="header">Want daily email updates?</h1>
        <p className="email-text">
          Enter your information below for daily email updates on our best picks
        </p>
        <form onSubmit={handleSubmit} className="email-form">
          <div className="email-form-item">
            <label className="email-label">
              Name:
              <input
                className="email-input"
                type="text"
                value={name}
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="email-form-item">
            <label className="email-label">
              Phone number:
              <input
                className="email-input"
                type="text"
                value={email}
                placeholder="johndoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <br />
          <input type="submit" className="email-submit-button" />
        </form>
      </div>
      {(errorMsgVisable || successMsgVisable) && (
        <div className="email-confirmations">
          {errorMsgVisable && (
            <div>
              <p className="email-confirmation-error">
                Please provide a valid email address.{" "}
              </p>
            </div>
          )}
          {successMsgVisable && (
            <div>
              <p className="email-confirmation-success">
                Thanks {name}, we will now send you daily email updates.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SignUpForm;
