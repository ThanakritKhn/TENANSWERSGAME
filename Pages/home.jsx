import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const goto = useNavigate();

  return (
    <div className="container">
      <div className="text">
        <div className="text-Random">Random Number</div>
        <div className="text-game">Game</div>
      </div>
      <div>
        <button className="btn-Easy" onClick={()=>goto('/easy')}>Easy</button>
        <button className="btn-Normal" onClick={()=>goto('/Normal')}>Normal</button>
        <button className="btn-Hard" onClick={()=>goto('/Hard')}>Hard</button>
      </div>
    </div>
  );
};
