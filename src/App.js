import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (isNaN(newValue)) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const validationMessage = useMemo(() => {
    return valid ? "Valid number" : "Invalid number";
  }, [valid]);
  if (validationMessage === "Valid number") {
    document.getElementById("my-element").className = "fas fa-check";
  }

  return (
    <div className="App">
      <div className="control has-icons-right">
        <form>
          <input
            className="input is-large"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter number..."
          />
        </form>

        <div>
          <p>{validationMessage}</p>
        </div>
        <span className="icon is-small is-right">
          <i className="fas fa-times" id="my-element" />
        </span>
      </div>
    </div>
  );
}

export default App;
