// CalculatorButton.js
import PropTypes from 'prop-types';
import '../App.css';

const CalculatorButton = ({ label, onClick }) => {
  const isOperator = ['+', '-', '*', '/', '=' ].includes(label);

  return (
    <button
      className={`component-button ${isOperator ? 'operator' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

CalculatorButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
