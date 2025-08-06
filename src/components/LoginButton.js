import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div style={{ textAlign: 'center' }}>
      <button 
        onClick={() => loginWithRedirect()}
        style={{
          backgroundColor: '#1e40af',
          color: 'white',
          border: 'none',
          padding: '12px 30px',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          margin: '10px'
        }}
      >
        Login with Email
      </button>
      <br />
      <p style={{ margin: '10px 0', color: '#6b7280' }}>or</p>
      <button 
        onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}
        style={{
          backgroundColor: '#dc2626',
          color: 'white',
          border: 'none',
          padding: '12px 30px',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          margin: '10px'
        }}
      >
        Continue with Google
      </button>
    </div>
  );
}

export default LoginButton;