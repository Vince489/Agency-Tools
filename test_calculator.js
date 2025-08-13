// Import the calculator tool
import { calculatorTool } from './calculator_tool.js';

// Define the expression to test
const expressionToTest = "2 + 2";

// Execute the calculator tool
calculatorTool.call({ expression: expressionToTest })
  .then(result => {
    console.log(`Result of "${expressionToTest}": ${result}`);
  })
  .catch(error => {
    console.error(`Error testing calculator tool: ${error}`);
  });
