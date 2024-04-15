import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      Navbar........................
      <Link style={{ color: "red" }} href="/project">
        project
      </Link>
      <br/>
      <Link style={{ color: "red" }} href="/home">
        Home
      </Link>
      <br/>
      
    </div>
  );
}

export default Navbar;
