import Ellipse from "./Ellipse";

function Corousel({ style, size }) {
  return (
    <div style={style}>
      <Ellipse color="#2DA950" height={size} width={size} />
      <Ellipse color="#E4E3E3" height={size} width={size} />
      <Ellipse color="#E4E3E3" height={size} width={size} />
    </div>
  );
}

export default Corousel;
