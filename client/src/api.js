
export default async function apiResponses(text, length) {
    const response = await fetch("http://localhost:8000/api/summarize", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, length }),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.error || "Failed to generate summary."
        );
    }
    return data;




}