import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRandom } from "../store/reduces/Random";

export default function B2() {
  const state: any = useSelector((state) => state);

  const dispath = useDispatch();

  return (
    <div>
      <p>List number: [{state.Random}]</p>
      <button onClick={() => dispath(addRandom())}>Random</button>
    </div>
  );
}
