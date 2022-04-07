import React from "react";

const TotalLineChart = ({ totalAmountRaised, totalAmountNeeded }: any) => {
  const length = 100;
  const result = Math.round((totalAmountRaised / totalAmountNeeded) * 100);

  const Parentdiv = {
    width: `${length}%`,
    borderRadius: 10,
    backgroundColor: "white",
    border: "1px solid #e9eaec",
    height: 6,
  };

  const Childdiv = {
    height: "100%",
    backgroundColor: "#4f269f",
    color: "white",
    width: `${result}%`,
    borderRadius: 10,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};
export default TotalLineChart;
