import PropTypes from "prop-types";
import Button from "./Button";
import "./CalculatorButton"

const ButtonPanel = ({ clickHandler }) => {
  const buttons = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className="component-button-panel">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((buttonName, colIndex) => (
            <Button
              key={colIndex}
              name={buttonName}
              clickHandler={clickHandler}
              orange={buttonName === "÷" || buttonName === "x" || buttonName === "-" || buttonName === "+" || buttonName === "="}
              wide={buttonName === "0"}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
