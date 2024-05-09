import Rocket from "./Rocket";

function StaffDeployment() {
  return (
    <div
      style={{
        padding: "1%",
        backgroundColor: "white",
        display: "inline-block",
        borderRadius: "50px",
        position: "absolute",
        // top: "70%",
        // left: "20%",
        top: "26vw",
        left: "12vw",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.8vw",
          paddingRight: "0.5vw",
        }}
      >
        <Rocket />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontFamily: "Manrope",
              fontSize: "1vw",
              fontWeight: "bold",
              color: "#1C1C1C",
            }}
          >
            10 DAYS
          </h3>
          <p
            style={{
              display: "inline-block",
              textWrap: "nowrap",
              fontFamily: "Manrope",
              fontSize: "0.7vw",
              color: "828282",
              fontWeight: "medium",
            }}
          >
            Staff Deployment
          </p>
        </div>
      </div>
    </div>
  );
}

export default StaffDeployment;
