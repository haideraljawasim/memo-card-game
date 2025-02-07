import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-4 border-t-4 border-t-transparent border-blue-950 w-16 h-16"></div>
    </div>
  );
}

export default Loader;
