const DisplayMessage = () => {
  const isVisible = false;
  return (
    <div>
      {isVisible ? (
        <p>This message is visible</p>
      ) : (
        <p>This message is not visible</p>
      )}
    </div>
  );
};
export default DisplayMessage;
