import Sparkle from "./Sparkle";

function Percentage() {
  return (
    <div
      style={{
        position: "absolute",
        // top: "18%",
        // left: "14%",
        top: "7vw",
        left: "7vw",
        backgroundColor: "white",
        borderRadius: "27.11px",
        display: "flex",
        flexDirection: "column",
        padding: "3%",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
        border: "none",
      }}
    >
      <Sparkle />
      <h1
        style={{
          fontFamily: "Switzer",
          fontSize: "4.2vw",
          display: "inline-block",
          fontWeight: "500",
        }}
      >
        40%
      </h1>
      <p
        style={{
          fontFamily: "Manrope",
          fontWeight: "500",
          fontSize: "1.08vw",
          color: "#828282",
          display: "inline-block",
        }}
      >
        Achieved reduction in
        <br /> project execution time
        <br /> by optimising team
        <br /> availability
      </p>
    </div>
  );
}

export default Percentage;
