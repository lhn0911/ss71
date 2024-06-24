import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "../store/reduces/CountReduces";

export default function Count() {
  const state: any = useSelector((state) => state);

  const dispath = useDispatch();
  return (
    <div>
      <p>Gía trị count: {state.count}</p>
      <button onClick={() => dispath(increase())}>Tăng</button>
      <button onClick={() => dispath(decrease())}>Gỉam</button>
      <button onClick={() => dispath(reset())}>Reset</button>
    </div>
  );
}
