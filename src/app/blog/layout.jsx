import React from "react";

const Bloglayout = ({ children }) => {
  return (
    <div>
      <p className="text-md font-semibold text-purple-900">This is the Blog Layout</p>
      {children}
    </div>
  );
};

export default Bloglayout;
