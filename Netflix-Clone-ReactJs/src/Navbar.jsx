import React from "react";
import { useEffect, useState } from "react";
import navbarcss from "./navbar.css";
export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="netflixlogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
        alt="Logo"
      />
      <img
        className="userlogo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="user"
      />
    </div>
  );
}
