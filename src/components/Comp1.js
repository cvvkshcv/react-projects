import { memo } from "react";

function Comp1({ name }) {
  return <h1>Name: {name}</h1>;
}

export default memo(Comp1);