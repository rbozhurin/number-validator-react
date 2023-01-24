import { useState, useMemo } from "react";

function App() {
  const [text, setText] = useState("");
  const isValid = useMemo(() => {
    // Use a regular expression to check if the text is a valid number
    return /^\d+$/.test(text);
  }, [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className="icon is-small is-right">
          <i className={`fas ${isValid ? "fa-check" : "fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
