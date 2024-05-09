import { useState } from "react";

function Question({ question, answer }) {
  const [showAns, setShowAns] = useState(false);

  return (
    <div
      style={{
        width: "35vw",
        paddingBottom: "1vw",
        borderBottom: "1px solid #D7D7D7",
        marginTop: "1vw",
      }}
    >
      <div
        style={{
          width: "35vw",
          display: "flex",
          flexDirection: "row",
          paddingBottom: "1vw",
          marginTop: "1vw",
        }}
      >
        <div style={{ display: "inline-block", width: "70%" }}>
          <p
            style={{
              fontSize: "1.3vw",
              fontFamily: "Manrope",
              fontWeight: "600",
            }}
          >
            {question}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            width: "30%",
            flexDirection: "row-reverse",
          }}
        >
          {!showAns ? (
            <svg
              width={`${0.7}vw`}
              height={`${0.7}vw`}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "auto 0", fontWeight: "500" }}
              onClick={() => {
                setShowAns(!showAns);
              }}
            >
              <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
            </svg>
          ) : (
            <svg
              width={`${0.7}vw`}
              height={`${0.2}vw`}
              viewBox="0 0 14 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "auto 0", fontWeight: "500" }}
              onClick={() => {
                setShowAns(!showAns);
              }}
            >
              <path d="M0 0V2H14V0H0Z" fill="black" />
            </svg>
          )}
        </div>
      </div>

      {showAns && (
        <div>
          <p
            style={{
              color: "#617275",
              fontFamily: "Manrope",
              fontSize: "0.73vw",
            }}
          >
            If unhappy with a project, communicate with the freelancer, allow
            for revisions, and refer to the agreement. Escalate to platform
            support if needed, considering mediation. Review policies, seek
            collaborative solutions for resolution.
          </p>
        </div>
      )}
    </div>
  );
}

export default Question;
