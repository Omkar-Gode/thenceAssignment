function PrimaryButton({ children, style }) {
  return (
    <button className="primarycta" style={style}>
      {children}
    </button>
  );
}

export default PrimaryButton;
