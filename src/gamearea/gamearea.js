import React from "react";
import Board from "./board";

const Gamearea = () => {
  
  return (
    <div className="bg-gray-600">
      <div className="w-[340px] mx-auto py-24">
        <Board />
      </div>
    </div>
  );
};

export default Gamearea;
