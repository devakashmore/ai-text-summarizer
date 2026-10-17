
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextInput from "./components/TextInput";
import apiResponses from "./api";
import SummaryOutput from "./components/SummaryOutput";
import ErrorMessage from "./components/ErrorMessage";


function App() {

  const [text, setText] = useState("");
  const [length, setLength] = useState("short");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSummarize() {
    if (!text) {
      setError("Please enter some text to summarize.");
      return;
    }

    setLoading(true);
    setError("");
    setSummary("");

    try {
      const data = await apiResponses(text, length);
      // console.log(data);


      setSummary(data.summary);

    } catch (error) {
      setError(
        error.message || "Unable to connect to the server."
      );
    } finally {
      setLoading(false);
    }

  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(summary);
    } catch {
      setError("Unable to copy the summary.");
    }
  }

  return (
    <>
      <main className="app">
        <Header />
        <Hero />
        <section className="workspace">
          <TextInput
            text={text}
            setText={setText}
            length={length}
            setLength={setLength}
            loading={loading}
            onSummarize={handleSummarize}
          />
          <SummaryOutput
            summary={summary}
            loading={loading}
            onCopy={handleCopy}
          />
        </section>
        <ErrorMessage message={error} />

        <footer>
          Built with React, Express &amp; Gemini AI
        </footer>
      </main>
    </>
  )
}

export default App