import { useState, useEffect, useCallback } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = useCallback((label) => {

    if (label === '=') {


      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (label === 'C') {
      setInput('');
    } else if (label === 'sqrt') {

      try {
        setInput(Math.sqrt(eval(input)).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (label === 'x^2') {

      try {
        setInput(Math.pow(eval(input), 2).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (label === 'x^y') {

      const exponent = prompt('Enter the exponent (y):');
      if (exponent !== null) {
        try {
          setInput(Math.pow(eval(input), parseFloat(exponent)).toString());
        } catch (error) {
          setInput('Error');
        }
      }
    } else if (label === '+/-') {

      setInput((prevInput) => (prevInput[0] === '-' ? prevInput.slice(1) : `-${prevInput}`));
    } else {
      setInput((prevInput) => prevInput + label);
    }
  }, [input]);

  // Listen for keyboard events
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;

      if (/[0-9+\-*/.=]/.test(key)) {
        handleButtonClick(key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleButtonClick]);

  return (
    <div className="calculator">
      <CalculatorDisplay input={input} />
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <CalculatorButton key={number} label={number.toString()} onClick={handleButtonClick} />
        ))}



        {['+', '-', '*', '/'].map((operator) => (
          <CalculatorButton key={operator} label={operator} onClick={handleButtonClick} />
        ))}
        <CalculatorButton label="=" onClick={handleButtonClick} />

        <CalculatorButton label="C" onClick={handleButtonClick} />


        <CalculatorButton label="sqrt" onClick={handleButtonClick} />
        <CalculatorButton label="x^2" onClick={handleButtonClick} />
        <CalculatorButton label="x^y" onClick={handleButtonClick} />
        <CalculatorButton label="." onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
