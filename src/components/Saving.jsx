function Saving() {
  return (
    <div
      style={{
        padding: "1.6vw",
        backgroundColor: "#002E18",
        color: "white",
        display: "inline-block",
        borderRadius: "50px",
        position: "absolute",
        right: "2vw",
        top: "26vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>
          <h1
            style={{
              display: "inline-block",
              alignSelf: "flex-end",
              fontFamily: "Switzer",
              fontWeight: "450",
              fontSize: "3.2vw",
              color: "white",
            }}
          >
            $0.5
          </h1>
          <p
            style={{
              display: "inline-block",
              alignSelf: "flex-end",
              marginLeft: "0.4vw",
              color: "#A6A3A0",
              fontFamily: "Switzer",
              fontSize: "1.1vw",
            }}
          >
            MILLION
          </p>
        </span>
        <span
          style={{
            fontFamily: "Manrope",
            marginTop: "0.4vw",
            color: "#CCCCCC",
            fontSize: "0.85vw",
          }}
        >
          Reduced client expenses
          <br />
          by saving on hiring and
          <br />
          employee costs.
        </span>
      </div>
    </div>
  );
}

export default Saving;
