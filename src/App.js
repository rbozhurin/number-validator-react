import { useState, useMemo, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const calculate = (text) => {
    const validRegex = new RegExp(/[1-9]/);

    if (validRegex.test(text)) {
      if (text < 15) {
        return text;
      }
    } else {
      return false;
    }
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  const memoCalculate = useMemo(() => calculate(text), [text]);
  useEffect(() => {
    console.log(memoCalculate, text);
  }, [memoCalculate, text]);
  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={onChange}
          value={text}
        />
        <span className="icon is-small is-right">
          <i className={`${memoCalculate ? "fas fa-check" : "fas fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
