import { useState } from "react";
import axios from "axios";

export default function JobChecker() {
    const [jobUrl, setJobUrl] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/predict", { job_url: jobUrl });
            setResult(response.data);
        } catch (error) {
            setResult({ error: "Failed to analyze job post." });
        }
        setLoading(false);
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow rounded-xl">
            <h1 className="text-xl font-bold mb-4">Fake Job Detector</h1>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input 
                    type="text" 
                    placeholder="Enter job URL" 
                    value={jobUrl} 
                    onChange={(e) => setJobUrl(e.target.value)} 
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                    {loading ? "Analyzing..." : "Check Job"}
                </button>
            </form>
            {result && (
                <div className="mt-4 p-2 bg-gray-100 rounded">
                    <h2 className="font-semibold">Prediction Result:</h2>
                    <p>{result.prediction || result.error}</p>
                </div>
            )}
        </div>
    );
}
