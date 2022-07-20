export default function Child(props) {
  let data = { name: "monty", email: "monty@gmail.com", password: "3235346" };
  return (
    <>
      <h1>This is a child component</h1>
      <button onClick={() => props.show(data)}>Click me</button>
    </>
  );
}
