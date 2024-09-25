// (06).Activity;
export default function MsgBox({ userName, textColor }) {
  return (
    <div>
      <h1 style={{ color: textColor }}> Hello {userName}</h1>
    </div>
  );
}
