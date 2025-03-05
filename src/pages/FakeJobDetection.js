import React, { useState } from 'react';

function FakeJobDetection() {
  const [jobUrl, setJobUrl] = useState('');
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setPrediction('');

    try {
      const response = await fetch('http://127.0.0.1:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ job_data: jobUrl }),
      });

      if (response.ok) {
        const result = await response.json();
        setPrediction(result.prediction);
      } else {
        setError('Error in fetching prediction');
      }
    } catch (err) {
      setError('Error in fetching prediction');
    }
  };

  return (
    <div>
      <h1>Fake Job Detection</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Job URL:
          <input 
            type="text" 
            value={jobUrl} 
            onChange={(e) => setJobUrl(e.target.value)} 
            placeholder="Enter job post URL here" 
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      <h2>Prediction:</h2>
      <div>{prediction ? prediction : 'Awaiting prediction...'}</div>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </div>
  );
}

export default FakeJobDetection;
