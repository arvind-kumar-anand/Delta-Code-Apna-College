export default function Counter() {
  let count = 0;
  function incount() {
    count += 1;
    console.log(count);
  }
  return (
    <div>
      <h3>count={count}</h3>
      <button onClick={incount}>Count</button>
    </div>
  );
}
