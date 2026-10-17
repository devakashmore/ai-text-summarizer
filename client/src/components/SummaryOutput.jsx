
function SummaryOutput({ summary, loading, onCopy }) {
  return (
    <>
      <div className="output-panel">
        <div className="panel-heading">
          <label htmlFor="">AI Summary</label>
          {
            summary && (
              <button className="copy-button" onClick={onCopy}>
                Copy summary
              </button>
            )
          }

        </div>
        {
          loading ? (
            <div className="output-placeholder">
              <div className="loader" />
              <p>Reading and summarizing your text...</p>
            </div>
          ) : summary ? (
            <div className="summary-content">
              <p>{summary}</p>
            </div>
          ) : (
            <div className="output-placeholder">
              <div className="placeholder-icon">✦</div>
              <h3>Your summary will appear here</h3>
              <p>
                Add your text, choose a length, and click
                Summarize Text.
              </p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default SummaryOutput