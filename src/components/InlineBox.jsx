const InlineBox = () => {
  const xyz = {
    width: "200px",
    height: "200px",
    backgroundColor: "blue",
    color: "white",
    padding: "20px",
    border: "2px solid black",
  };
  return <div style={xyz}>Inline Styled</div>;
};
export default InlineBox;
