import React, { useState } from "react";

export default function LotteryGame() {
  const [ticket, setTicket] = useState(""); // Store the generated ticket
  const [result, setResult] = useState(""); // Store the result message

  // Function to generate a random 3-digit lottery ticket
  const generateTicket = () => {
    // Generate a 3-digit number (ensuring each digit is random between 0 and 9)
    const digit1 = Math.floor(Math.random() * 10); // Random digit 1
    const digit2 = Math.floor(Math.random() * 10); // Random digit 2
    const digit3 = Math.floor(Math.random() * 10); // Random digit 3

    // Construct the ticket number as a string (e.g., "123")
    const ticketNumber = `${digit1}${digit2}${digit3}`;

    // Update ticket state
    setTicket(ticketNumber);

    // Calculate the sum of digits
    const sum = digit1 + digit2 + digit3;

    // Check if the sum is 15 and update the result state
    if (sum === 15) {
      setResult("Congratulations! You won the lottery!");
    } else {
      setResult("Sorry, you Lost. Try again!");
    }
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      {/* Button to generate the lottery ticket */}
      <button onClick={generateTicket}>Get New Ticket</button>
      <br /> <br />
      {/* Display the generated ticket */}
      {ticket && <h2>Lottery Ticket: {ticket}</h2>}
      {/* Display the result of the game */}
      {result && <h3>{result}</h3>}
    </div>
  );
}
