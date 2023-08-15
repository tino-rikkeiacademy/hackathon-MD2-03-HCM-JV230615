import React from "react";

export default function Header() {
  return (
    <div>
      <div className="container-header">
        
        <div className="container-count">
          <div className="counter">
            <p>Word</p>
            <span>1</span>
          </div>
          <div className="counter">
            <p>Letter</p>
            <span>1</span>
          </div>
          <div className="counter">
            <p>Paragraph</p>
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
