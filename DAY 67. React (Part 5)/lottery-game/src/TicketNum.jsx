import React, { useState } from "react";
import "./TicketNum.css";

//06. Ticket Component
export default function TicketNum({ num }) {
  return (
    <span>
      <span className="ticketNum">{num}</span>
    </span>
  );
}
