import React, { useState, useEffect } from 'react';
import './StatusMessage.scss';

interface StatusMessageProps {
  status: 'loading' | 'error';
}

function StatusMessage({ status }: StatusMessageProps) {
  const [dots, setDots] = useState('...');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-message">
      {status === 'loading' ? `Loading${dots}` : "Eh, we don't seem to have found anything."}
    </div>
  );
}

export default StatusMessage;
