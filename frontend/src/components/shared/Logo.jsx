import React from 'react';
import cashlyLogo from '/src/assets/cashly.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={cashlyLogo}
        alt="Cashly Logo"
        className="h-24 w-auto object-contain bg-transparent"
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default Logo;
