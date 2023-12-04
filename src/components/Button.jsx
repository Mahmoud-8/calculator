import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ name, clickHandler, orange, wide }) => {
  const className = `component-button ${orange ? "orange" : ""} ${wide ? "wide" : ""}`;

  return (
    <button className={className} onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
