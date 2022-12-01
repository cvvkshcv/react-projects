import { memo } from "react";

function Comp2({ role, hobby }) {
  return <h1>Role: {role} & Hobby: {hobby}</h1>;
}

export default memo(Comp2, (prevProp, currProp) => {
  console.log({prevProp, currProp});
  if(prevProp.hobby !== currProp.hobby) {
    return false;
  } else {
    return true;
  }
});
