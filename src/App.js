import './App.css';
import { useState } from 'react';
import UploadData from '../src/UploadData';
import DisplayData from '../src/DisplayData';
import PlayOutcomeChart from '../src/PlayOutcomeChart';
import LaunchAngleVsDistanceChart from '../src/LaunchAngleVsDistanceChart';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <h1>Baseball Data Visualization</h1>
      <div className="file-upload-container">
        <UploadData onDataLoad={setData} />
      </div>
      {data.length > 0 && (
        <>
          <DisplayData data={data} />
          <h2>Exit Speed and Launch Angle by Batter</h2>
          <PlayOutcomeChart data={data} />
          <LaunchAngleVsDistanceChart data={data} />
        </>
      )}
    </div>

  );
}

export default App;
