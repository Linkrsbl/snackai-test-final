import React from 'react';

function WelcomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.2rem', color: '#222' }}>안녕하세요</h1>
      <div style={{ fontSize: '1.3rem', fontWeight: '500', color: '#555', marginTop: '0.2rem', letterSpacing: '0.02em' }}>
        헬로헬로
      </div>
    </div>
  );
}

export default WelcomePage;