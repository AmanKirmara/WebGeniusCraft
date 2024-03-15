import React, { useState } from 'react';

const ExtensionWarning = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleLaterClick = () => {
    // Handle logic for "Later" button click
    setIsVisible(false);
  };

  const handleBlockClick = () => {
    // Handle logic for "Block" button click
    // Display instructions or a link to extension settings
    alert("To improve your experience, please disable ad-blockers or privacy extensions. You can find extension settings in your browser.");
    setIsVisible(false);
  };

  return (
    // Render your component content here
    <div>
      {isVisible && (
        <div className="extension-warning">
          <p>
            This website may experience issues with browser extensions.
            Please consider disabling ad-blockers or privacy extensions to ensure full functionality.
          </p>
          <div className="button-container">
            <button onClick={handleLaterClick}>Later</button>
            <button onClick={handleBlockClick}>Block</button>
          </div>
        </div>
      )}
      {/* Your main content goes here */}
    </div>
  );
}

export default ExtensionWarning;
