import React from 'react';

const Signup = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Enter your name" required />
        <br /><br />
        <input type="email" placeholder="Enter your email" required />
        <br /><br />
        <input type="password" placeholder="Enter your password" required />
        <br /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
