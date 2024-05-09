import { TopRectangle, MiddleRectangle, BottomRectangle } from "./components";

function Rectangles() {
  return (
    <div style={{ position: "absolute", right: "-12vw", top: "11.5vw" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TopRectangle />
        <TopRectangle />
        <TopRectangle />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "-0.7vw" }}
      >
        <MiddleRectangle />
        <MiddleRectangle />
        <MiddleRectangle />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "-0.7vw" }}
      >
        <BottomRectangle />
        <BottomRectangle />
        <BottomRectangle />
      </div>
    </div>
  );
}

export default Rectangles;
