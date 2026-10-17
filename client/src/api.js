
export default async function apiResponses(text, length) {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

    const response = await fetch(`${API_URL}/api/summarize`, {
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