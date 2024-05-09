import { useState } from "react";
import RegistrationHeading from "./RegistrationHeading";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    console.log(name.length, email);

    if (email.match(validRegex)) {
      setError(false);
      navigate("/success");
    } else {
      setError(true);
    }
  }

  return (
    <div style={{ display: "inline-block", marginTop: "4vw" }}>
      <RegistrationHeading />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2vw" }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2vw",
            marginTop: "1.5vw",
          }}
        >
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            type="text"
            placeholder="Enter Your Name"
            style={{
              fontFamily: "Manrope",
              fontSize: "1vw",
              backgroundColor: "#EFEFEF",
              border: "none",
              padding: "1vw",
              paddingLeft: "2vw",
              width: "17vw",
              borderRadius: "64px",
            }}
          />

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            type="text"
            placeholder="Enter Your Name"
            style={{
              fontFamily: "Manrope",
              fontSize: "1vw",
              backgroundColor: "#EFEFEF",
              border: "none",
              padding: "1vw",
              paddingLeft: "2vw",
              width: "17vw",
              borderRadius: "64px",
            }}
          />

          {error && <ErrorMessage />}

          {name.length !== 0 && email.length !== 0 ? (
            <button
              style={{
                fontFamily: "Manrope",
                fontSize: "1vw",
                backgroundColor: "#1C1C1C",
                color: "white",
                border: "none",
                padding: "1vw",
                paddingLeft: "2vw",
                width: "20vw",
                borderRadius: "64px",
              }}
            >
              Submit
            </button>
          ) : (
            <button
              disabled
              style={{
                fontFamily: "Manrope",
                fontSize: "1vw",
                backgroundColor: "#C9C9C9",
                color: "white",
                border: "none",
                padding: "1vw",
                paddingLeft: "2vw",
                width: "20vw",
                borderRadius: "64px",
              }}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
