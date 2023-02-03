const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;

  return (
    <div className={`box ${className}`}>
      <p className="text">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="yellow-box" boxText="Small" />
      <Box className="blue-box" boxText="Medium" />
      <Box className="pink-box" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
