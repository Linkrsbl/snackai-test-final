import React from 'react';

function WelcomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          marginTop: '48px',
          marginBottom: '32px',
        }}
      >
        <span
          style={{
            fontSize: '2.2rem',
            fontWeight: 700,
            color: '#1a237e',
            fontFamily: 'sans-serif',
            letterSpacing: '-0.5px',
          }}
        >
          안녕하세요
        </span>
      </div>
      {/* 기존 웰컴 페이지의 내용은 아래에 그대로 유지 */}
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
        {/* 예시: 기존 내용 */}
        <h1 style={{ fontFamily: 'sans-serif', color: '#222' }}>Welcome to Our Service!</h1>
        <p style={{ fontFamily: 'sans-serif', color: '#444', lineHeight: 1.6 }}>
          This is the main welcome page. Explore our features and enjoy your stay.
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;