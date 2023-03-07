import React from "react";

const BasicDropdown = ({ showDropdown, setShowDropdown, items }) => {
  return (
    <div className="dropdown-wrapper">
      <div onClick={setShowDropdown} className="trigger-button">
        Items
      </div>
      <ul className={showDropdown ? "active" : ""}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasicDropdown;
