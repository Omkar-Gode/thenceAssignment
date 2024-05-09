function Ellipse({ color, height, width }) {
  return (
    <svg
      width={`${width}vw`}
      height={`${height}vh`}
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.125" cy="5.375" r="5.375" fill={`${color}`} />
    </svg>
  );
}

export default Ellipse;
