import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import G6 from '@antv/g6';
import './g6-demo';
const data = {
  nodes: [
    {
      id: '1',
      label: 'Circle',
      x: 250,
      y: 150,
      type: 'node-icon',
    },

    {
      id: '2',
      label: 'Circle',
      x: 450,
      y: 150,
      type: 'node-icon',
    },
  ],
  edges: [
    {
      source: '1',
      target: '2',
    },
  ],
};

export default () => {
  const ref = React.useRef(null);
  const graphRef = React.useRef(null);

  React.useEffect(() => {
    if (!graphRef.current) {
      //@ts-ignore
      graphRef.current = new G6.Graph({
        renderer: 'svg',
        // plugins: [tooltip],
        container: ReactDOM.findDOMNode(ref.current) as any,

        width: 800,
        height: 600,
      });
    }

    graphRef.current?.data(data);
    graphRef.current?.render();
  }, []);
  return (
    <div ref={ref}>
      <div
        style={{
          position: 'absolute',
          left: 300,
          top: 300,
          cursor: 'pointer',
          background: '#2B6DE5',
          padding: '4px 8px',
          color: 'white',
        }}
        onClick={() => {
          graphRef?.current?.downloadFullImage();
        }}
      >
        下载
      </div>
    </div>
  );
};
