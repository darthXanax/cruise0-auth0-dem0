import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();
  
  return (
    <button 
      onClick={() => logout({ returnTo: window.location.origin })}
      style={{
        backgroundColor: '#dc2626',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        fontSize: '14px',
        cursor: 'pointer'
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;