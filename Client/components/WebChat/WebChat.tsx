import React from 'react';

const Webchat: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://web.powerva.microsoft.com/environments/Default-9774e020-c9b7-4a68-898c-6a7a7e9c0894/bots/crc7a_parcelBot/webchat?__version__=2"
        frameBorder="0"
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default Webchat;
