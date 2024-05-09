import Logo from "../components/Logo";
import SuccessHeading from "../components/SuccessHeading";

function SuccessPage() {
  return (
    <div className="successPage">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1.5vw 3vw",
        }}
      >
        <Logo width={6.5} height={3} />
      </div>
      <div>
        <SuccessHeading />
      </div>
    </div>
  );
}

export default SuccessPage;
