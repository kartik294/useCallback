import PropTypes from "prop-types";

const Square = ({ number, handleSquare }) => {
  return (
    <div>
      <p>The square of {number}</p>
      <button onClick={() => handleSquare(number)}>Calculate Square</button>
    </div>
  );
};

Square.propTypes = {
  number: PropTypes.number.isRequired,
  handleSquare: PropTypes.func.isRequired,
};

export default Square;
