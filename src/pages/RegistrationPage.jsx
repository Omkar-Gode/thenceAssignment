import CloseButton from "../components/CloseButton";
import Logo from "../components/Logo";
import RegistrationForm from "../components/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="regPage">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1.5vw 3vw",
        }}
      >
        <Logo width={6.5} height={3} />
        <CloseButton width={1.4} height={1.4} />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
