import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TreeRenderer.css'; // Optional: for styling

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="tree-node">
      <div className="node-header" onClick={() => setExpanded(!expanded)}>
        {hasChildren && (
          <span className="toggle-icon">{expanded ? '▼' : '▶'}</span>
        )}
        <span className="node-name">{node.name}</span>
        {node.relation && <span className="node-relation">({node.relation})</span>}
      </div>

      {expanded && hasChildren && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

TreeNode.propTypes = {
  node: PropTypes.shape({
    name: PropTypes.string.isRequired,
    relation: PropTypes.string,
    children: PropTypes.array,
  }).isRequired,
};

const TreeRenderer = ({ data }) => {
  return (
    <div className="tree-renderer">
      <TreeNode node={data} />
    </div>
  );
};

TreeRenderer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TreeRenderer;
