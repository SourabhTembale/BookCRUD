import React from 'react';

const Spinner = () => {
  return (
    <div
      style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        backgroundColor: '#0284c7',
        animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      }}
    ></div>
  );
};

export default Spinner;
