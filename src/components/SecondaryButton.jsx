import { useNavigate } from "react-router-dom";

function SecondaryButton({ children, style }) {
  const navigate = useNavigate();
  return (
    <button
      className="secondarycta"
      style={style}
      onClick={() => navigate("/register")}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
