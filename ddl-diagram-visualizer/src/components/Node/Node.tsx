/* Storybook デモ DemoNodeコンポーネント */

import React, { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import './node.css';

type DemoNodeProps = {
  color?: string;
  isConnectable: boolean;
};

export const DemoNode = ({ color = 'white', isConnectable }: DemoNodeProps) => {
  const [text, setText] = useState<string>();
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    []
  );
  return (
    <div className="node" style={{ background: color }}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text" style={{ textAlign: 'left' }}>
          Text:{text}
        </label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ left: 10 }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
};
