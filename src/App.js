import "./index.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import React, { useState } from "react";

function App() {
  const [textAreaValue, setTextAreaValue] = useState("");
  return (
    <main className="markdown">
      <textarea
        className="input"
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
      ></textarea>
      <article className="result">
        <ReactMarkdown children={textAreaValue}></ReactMarkdown>
      </article>
    </main>
  );
}

export default App;
