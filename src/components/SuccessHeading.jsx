import { useEffect, useState } from "react";
import SuccessLogo from "./SuccessLogo";
import { useNavigate } from "react-router-dom";

function SuccessHeading() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(function () {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "7vw",
      }}
    >
      <div style={{ display: "flex ", justifyContent: "center" }}>
        <SuccessLogo width={4} height={4} />
      </div>
      <p
        style={{
          color: "#2DA950",
          fontFamily: "CoveredByYourGrace",
          fontSize: "1.6vw",
          textAlign: "center",
          marginTop: "1.5vw",
        }}
      >
        Success Submitted
      </p>
      <h1
        style={{
          color: "#1C1C1C",
          fontFamily: "Manrope",
          fontSize: "2.4vw",
          textAlign: "center",
        }}
      >
        Congratulations
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#727272",
          fontSize: "1.2vw",
          fontFamily: "Manrope",
          marginTop: "1vw",
        }}
      >
        Your request has been successfully submitted to us. We
        <br /> will validate your information and reach out to your
        <br /> shortly with updates
      </p>

      <span style={{ textAlign: "center", marginTop: "8vw" }}>
        <p
          style={{
            display: "inline-block",
            fontFamily: "Manrope",
            fontSize: "1vw",
            color: "#727272",
          }}
        >
          Redirecting you to Homepage in
        </p>
        <p
          style={{
            display: "inline-block",
            fontFamily: "Manrope",
            fontSize: "1vw",
            fontWeight: "700",
            color: "#1C1C1C",
            marginLeft: "0.5vw",
          }}
        >
          {seconds} seconds
        </p>
      </span>
    </div>
  );
}

export default SuccessHeading;
