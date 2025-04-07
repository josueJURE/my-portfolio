import { useState } from "react";
import React, { JSX } from "react";

interface MenuIconProps {
  onToggle: (newState: boolean) => void;
  // Add any props here if needed in the future
}

export default function MenuIcon(props: MenuIconProps): JSX.Element {
  const [state, setState] = useState<boolean>(false);

  function toggleIcon(): void {
    setState((prev: boolean) => {
      const newState = !prev;
      props.onToggle(newState);
      return newState;
    });
  }

  return (
    <>
      <div
        onClick={() => toggleIcon()}
        className={`menu-icon ${state === true ? "change" : ""}`}
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
      </div>
    </>
  );
}
