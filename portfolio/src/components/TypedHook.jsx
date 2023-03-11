import Typed from "typed.js";
import { useEffect, useRef } from "react";
import React from "react";
import * as ReactDOM from "react-dom";
const TypedHook = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Student", "Developer", "Designer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h1>
      I am a <span ref={el}></span>{" "}
    </h1>
  );
};
export default TypedHook;
