import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBackground } from "../store/reduces/LightDark";
import "../store/reduces/LightDark";
export default function B3() {
  const isLight = useSelector((state) => state.back);

  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className={`box ${isLight ? "light" : "dark"}`}>
        <button
          className={`btn ${isLight ? "light" : "dark"}`}
          onClick={() => dispatch(toggleBackground())}
        >
          {isLight ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}
