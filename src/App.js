import React from "react";
import useFetchJobs from "./useFetchJobs";

function App() {
  const { jobs } = useFetchJobs();
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
