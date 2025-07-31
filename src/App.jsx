// App.jsx
import React from 'react';
import TreeRenderer from './TreeRenderer';
import { familyTree } from './treeData';

function App() {
  return (
    <div>
      <h2>Family Tree</h2>
      <TreeRenderer data={familyTree} />
    </div>
  );
}

export default App;
