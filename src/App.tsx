import React from "react";
import { useViewer } from "react-three-viewer";

import "./App.css";

const App: React.FC = () => {
  const [binds, { load }] = useViewer();

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList) return;

    const file = fileList[0];

    if (!file) return;

    load(file);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload the STL file that is in Project's Root</h1>
        <input type="file" onChange={handleUpload} />
        <div>
          <canvas ref={binds} />
        </div>
      </header>
    </div>
  );
};

export default App;
