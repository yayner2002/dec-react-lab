const DateDisplay = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div>
      <p>today is {today}</p>
    </div>
  );
};
export default DateDisplay;
