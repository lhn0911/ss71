import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayChange } from "../store/reduces/number";
import "../App.css";

export default function B4() {
  const isListMode = useSelector((state) => state.b4);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="controls">
        <button
          className="toggle-btn"
          onClick={() => dispatch(displayChange())}
        >
          {isListMode ? "List mode" : "Grid mode"}
        </button>
      </div>
      <div
        className={`items-container ${isListMode ? "list-mode" : "grid-mode"}`}
      >
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
      </div>
    </div>
  );
}
