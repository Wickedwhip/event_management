import React from 'react';

const HeaderBar = ({ onLogout }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: '#1e1e2f',
      color: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      marginBottom: '24px',
    },
    title: {
      fontSize: '1.4rem',
      fontWeight: '600',
      background: 'linear-gradient(90deg, #00eaff, #ff00cc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '1px',
    },
    button: {
      backgroundColor: '#4f46e5',
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#3730a3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        👋 Welcome to <strong>TriVerse Hub</strong>
      </div>
      <button
        style={styles.button}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        onClick={onLogout}
      >
        🔒 Logout
      </button>
    </div>
  );
};

export default HeaderBar;
