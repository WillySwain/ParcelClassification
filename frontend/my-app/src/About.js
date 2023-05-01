import React from 'react';
import table from './results_table.png';
function About() {
  return (
    <div>
      <h1>Results</h1>
      <img src={table} alt="A table of evaluation metrics" width="100" height="50" />
    </div>
  );
}

export default About;