import "./App.css";
import ThemeToggle from "./theme/ThemeToggle";
import HomePage from "./components/HomePage";

function App() {
  return (
    <ThemeToggle>
      <HomePage />
    </ThemeToggle>
  );
}

export default App;
