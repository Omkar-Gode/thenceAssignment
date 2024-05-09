import {
  Corousel,
  Percentage,
  PrimaryButton,
  Rectangles,
  RightArrow,
  Saving,
  StaffDeployment,
  Success,
} from "./components";

function FirstSection() {
  return (
    <div className="topcontent">
      <Success />

      <div
        style={{
          width: "59.15%",
          height: "67.8%",
          position: "absolute",
          bottom: "0",
        }}
      >
        <img className="girlimage" src="girlImage.png" alt="girlImage" />
        <Percentage />
        <StaffDeployment />
        <Saving />
      </div>

      <Rectangles />

      <span
        style={{
          position: "absolute",
          top: "22vw",
          left: "55vw",
          fontFamily: "Manrope",
          fontSize: "1.7vw",
          fontWeight: "600",
        }}
      >
        Enhance fortune 50
        <br /> company’s insights
        <br /> teams research
        <br /> capabilities
      </span>

      <Corousel
        size={1.5}
        style={{ position: "absolute", top: "34vw", left: "55vw" }}
      />

      <PrimaryButton
        style={{
          fontSize: `1.1vw`,
          fontWeight: "300",
          padding: "1vw 2vw",
          height: "4vw",
          position: "absolute",
          top: "49vw",
          left: "57vw",
        }}
      >
        <span style={{ margin: "auto 0" }}>
          <span>Explore more</span>
          <RightArrow size={0.9} style={{ marginLeft: "1vw" }} />
        </span>
      </PrimaryButton>
    </div>
  );
}

export default FirstSection;
