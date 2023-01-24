import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const isValidNumber = useMemo(() => {
    const numRegex = /^[0-9]*$/;
    return numRegex.test(text);
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
          <i className={`fas ${isValidNumber ? "fa-check" : "fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
