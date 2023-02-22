import logo from "./logo.svg";
import "./App.css";

function App() {
  const onclick = () => {
    console.log("siuuuu");
  };
  return (
    <div>
      <button onClick={onclick}>Click me</button>
    </div>
  );
}

export default App;
