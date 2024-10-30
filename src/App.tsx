import React from 'react';
import { QRCode, Space, theme } from 'antd';
import foto from "./assets/Foto 4.jpg"

const { useToken } = theme;

const App: React.FC = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode value="https://kick.com/dr-barrios" icon={foto} color={token.colorSuccessText} />
      <QRCode value="https://kick.com/dr-barrios" color={token.colorSuccessText} />
    </Space>
  );
};

export default App;