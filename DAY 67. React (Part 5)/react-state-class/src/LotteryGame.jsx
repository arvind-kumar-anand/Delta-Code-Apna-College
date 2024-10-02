import React, { useState } from "react";

//  02. Lottery Game (Part a)
//  03. Lottery Game (Part b)
// export default function LotteryGame() {
//   const [ticket, setTicket] = useState(""); // Store the generated ticket
//   const [result, setResult] = useState(""); // Store the result message

//   // Function to generate a random 3-digit lottery ticket
//   const generateTicket = () => {
//     // Generate a 3-digit number (ensuring each digit is random between 0 and 9)
//     const digit1 = Math.floor(Math.random() * 10); // Random digit 1
//     const digit2 = Math.floor(Math.random() * 10); // Random digit 2
//     const digit3 = Math.floor(Math.random() * 10); // Random digit 3

//     // Construct the ticket number as a string (e.g., "123")
//     const ticketNumber = `${digit1}${digit2}${digit3}`;

//     // Update ticket state
//     setTicket(ticketNumber);

//     // Calculate the sum of digits
//     const sum = digit1 + digit2 + digit3;

//     // Check if the sum is 15 and update the result state
//     if (sum === 15) {
//       setResult("Congratulations! You won the lottery!");
//     } else {
//       setResult("Sorry, you Lost. Try again!");
//     }
//   };

//   return (
//     <div>
//       <h1>Lottery Game</h1>
//       {/* Button to generate the lottery ticket */}
//       <button onClick={generateTicket}>Get New Ticket</button>
//       <br /> <br />
//       {/* Display the generated ticket */}
//       {ticket && <h2>Lottery Ticket: {ticket}</h2>}
//       {/* Display the result of the game */}
//       {result && <h3>{result}</h3>}
//     </div>
//   );
// }

//  04. Changes to Lottery Game
// USING CHAT GPT
// export default function LotteryGame() {
//   const [ticket, setTicket] = useState(""); // Store the generated ticket
//   const [result, setResult] = useState(""); // Store the result message
//   const [numDigits, setNumDigits] = useState(); // Number of digits in the ticket
//   const [winningSum, setWinningSum] = useState(); // The winning sum

//   // Function to generate a random N-digit lottery ticket
//   const generateTicket = () => {
//     let ticketNumber = "";
//     let sum = 0;

//     // Generate N digits and calculate the sum
//     for (let i = 0; i < numDigits; i++) {
//       const digit = Math.floor(Math.random() * 10); // Generate a random digit (0-9)
//       ticketNumber += digit; // Append digit to the ticket
//       sum += digit; // Add the digit to the sum
//     }

//     // Update the ticket state
//     setTicket(ticketNumber);

//     // Check if the sum matches the winning sum
//     if (sum === winningSum) {
//       setResult("Congratulations! You won the lottery!");
//     } else {
//       setResult(`Sorry, you Lost. The sum is ${sum}, try again!`);
//     }
//   };

//   // Update the number of digits (N)
//   const handleNumDigitsChange = (event) => {
//     setNumDigits(Number(event.target.value));
//   };

//   // Update the winning sum
//   const handleWinningSumChange = (event) => {
//     setWinningSum(Number(event.target.value));
//   };

//   return (
//     <div>
//       <h1>Lottery Game</h1>
//       {/* Input for number of digits */}
//       <label>
//         Number of Digits:
//         <input
//           type="number"
//           value={numDigits}
//           onChange={handleNumDigitsChange}
//           min="1" // Set minimum value to 1
//         />
//       </label>
//       <br />
//       {/* Input for winning sum */}
//       <label>
//         Winning Sum:
//         <input
//           type="number"
//           value={winningSum}
//           onChange={handleWinningSumChange}
//           min="1" // Set minimum value to 1
//         />
//       </label>
//       <br /> <br />
//       {/* Button to generate the lottery ticket */}
//       <button onClick={generateTicket}>Get New Ticket</button>
//       <br /> <br />
//       {/* Display the generated ticket */}
//       {ticket && <h2>Lottery Ticket: {ticket}</h2>}
//       {/* Display the result of the game */}
//       {result && <h3>{result}</h3>}
//     </div>
//   );
// }
