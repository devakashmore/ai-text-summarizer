
function TextInput({
  text,
  setText,
  length,
  setLength,
  loading,
  onSummarize,
}) {
  return (
    <>
      <div className="input-panel">
        <div className="panel-heading">
          <label htmlFor="source-text">
            Your Text
          </label>
          <span>{text.length.toLocaleString()}  / 20,000</span>
        </div>

        <textarea id="source-text"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 20000))}
          placeholder="Paste your article, notes, or any long text here..."
          rows={12}
        />

        <div className="input-footer">
          <label htmlFor="summary-length">Summary length</label>
          <select id="summary-length" value={length}
            onChange={(e) => setLength(e.target.value)}>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="detailed">Detailed</option>
          </select>
        </div>
        <button
          className="summarize-button"
          onClick={onSummarize}
          disabled={loading || !text.trim()}
        >
          {loading ? "Generating summary..." : "Summarize Text"}
        </button>

      </div>
    </>
  )
}

export default TextInput