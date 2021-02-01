import React from "react";
import { PopsicleStickProps } from "./types";

function PopsicleStick(props: PopsicleStickProps) {
  return (
    <>
      <p>{props.user.username}</p>
      {/* <img src={props.user.avatar} alt="avatar" /> */}
      <button>Remove</button>
    </>
  );
}

export default PopsicleStick;
