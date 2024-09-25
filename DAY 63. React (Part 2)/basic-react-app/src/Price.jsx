export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecoration: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "gold",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}> &#8377;{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={newStyles}> &#8377;{newPrice}</span>
    </div>
  );
}
