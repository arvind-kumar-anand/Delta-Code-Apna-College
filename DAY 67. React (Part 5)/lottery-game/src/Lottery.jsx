import Ticket from "./Ticket";
import { useState } from "react";

//07. Lottery Component
export default function LotteryGame({ n, winningSum }) {
  const [ticket, setTicket] = useState(genTicket(n));

  return (
    <div>
      <button>Generate New Ticek</button>
    </div>
  );
}
