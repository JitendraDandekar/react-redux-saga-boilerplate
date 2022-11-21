import React from "react";
import { useSelector } from "react-redux";
import { DecrementButton, IncreamentButton } from "../components/Button";

export default function Home() {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h1>Count</h1>
      <div>
        <IncreamentButton count={count} />
        <b style={{ fontSize: 30 }}>{count}</b>
        <DecrementButton count={count} />
      </div>
    </div>
  );
}
