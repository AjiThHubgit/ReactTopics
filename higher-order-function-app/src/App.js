import React from 'react';
import AddNumberComponent from './AddNumberComponent';
import withLogger from './withLogger';

const AddNumberWithLogger = withLogger(AddNumberComponent);

const App = () => {
  return (
    <div>
      <h1>Higher Order Component Example</h1>
      <AddNumberWithLogger a={5} b={7} />
    </div>
  );
};

export default App;