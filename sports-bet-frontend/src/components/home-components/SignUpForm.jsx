import React from "react";
import axios from "axios";

function SignUpForm() {
  const [phoneNumber, setPhoneNumber] = React.useState(null)

  React.useEffect(() => {
    axios
      .post("/user", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}

export default SignUpForm;
