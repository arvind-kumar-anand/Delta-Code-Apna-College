import TicketNum from "./TicketNum";
import "./Ticket.css";

//06. Ticket Component
export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h3>Ticket Number</h3>
      {ticket.map((num, idx) => (
        <TicketNum key={idx} num={num} />
      ))}
    </div>
  );
}
