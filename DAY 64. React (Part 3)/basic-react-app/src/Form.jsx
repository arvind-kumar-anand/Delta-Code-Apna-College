//03. Event Object
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log("Form Submitted");
}
export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="write something" />
      <button type="submit">Submit</button>
    </form>
  );
}
